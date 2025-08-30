"""This module represent definition for `Check Migration`."""
import pkgutil
from argparse import ArgumentParser
from importlib import import_module
from typing import List, Set, Tuple

from common.enums import LoggingLevelEnum
from common.logger import BaseLogger
from django.core.management import BaseCommand
from django.db.migrations import AlterField, DeleteModel, RemoveField
from django.db.migrations.loader import MigrationLoader

EXCLUDED_MIGRATIONS: List[str] = []

# Risky operation types can be moved to a constant for reuse
RISKY_OPERATIONS: Tuple[type, ...] = (RemoveField, AlterField, DeleteModel)


class Command(BaseCommand):
    """Management command to analyze a given app migration files & detect risky operations."""

    help = "Check migrations for specific operations in an app."

    def __init__(self):
        """
        Initialize the Command with the logger.

        The logger is a BaseLogger instance that logs messages with the class
        name and module name of the Command instance.
        """
        super().__init__()
        self.logger = BaseLogger(instance=self)

    def add_arguments(self, parser: ArgumentParser) -> None:
        """
        Add command-line arguments to the Django management command.

        Args:
            parser (ArgumentParser): The argument parser instance to which arguments are added.
        """
        parser.add_argument("app_name", type=str, help="Name of a Django app.")
        parser.add_argument(
            "--throw-exception",
            action="store_true",
            help="Throw exception if specified operation fails.",
        )

    def handle(self, *args: tuple, **kwargs: str) -> None:
        """
        Entry point for the command execution.

        Args:
            *args: Positional arguments.
            **kwargs: Keyword arguments. Expects 'app_name' and optionally 'throw_exception'.
        """
        app_name = kwargs["app_name"]
        throw_exception = kwargs.get("throw_exception", False)
        risky_migrations = self.check_risky_migrations(app_name)
        self.logger.log_function_entry(
            log_text=f"Checking migrations for app '{app_name}'",
            logger_type=LoggingLevelEnum.DEBUG,
            arguments={"app_name": app_name},
        )

        if risky_migrations:
            for migration, operation in risky_migrations:
                self.logger.log_function_entry(
                    log_text=f"Found risky operation '{operation}' in migration '{migration}'",
                    logger_type=LoggingLevelEnum.DEBUG,
                )

            if throw_exception:
                raise Exception(
                    f"Breaking operations identified in migrations: {risky_migrations}"
                )

    def check_risky_migrations(self, app_name: str) -> List[Tuple[str, str]]:
        """
        Scan all migrations of the given app and identifies risky operations.

        Args:
            app_name (str): The Django app name whose migrations should be checked.

        Returns:
            List[Tuple[str, str]]: List of tuples containing (migration_name, operation_type).
        """
        risky_migrations: List[Tuple[str, str]] = []
        migration_names = self.get_migration_names(app_name)

        for migration in migration_names:
            if migration in EXCLUDED_MIGRATIONS:
                self.logger.log_function_entry(
                    log_text=f"Skipping {migration} Excluded.",
                    logger_type=LoggingLevelEnum.INFO,
                )
                continue

            operations = self.get_migration_operations(app_name, migration)
            risky_ops = self.get_risky_operations(operations)

            for op_name in risky_ops:
                risky_migrations.append((migration, op_name))

        return risky_migrations

    def get_migration_names(self, app_name: str) -> Set[str]:
        """
        Retrieve the names of all migration files in the specified app.

        Args:
            app_name (str): The name of the Django app.

        Returns:
            Set[str]: A set of migration module names (e.g., {'0001_initial', '0002_auto'}).
        """
        module_name, _ = MigrationLoader.migrations_module(app_name)
        module = import_module(module_name)
        return {
            name
            for _, name, is_pkg in pkgutil.iter_modules(module.__path__)
            if not is_pkg and name[0] not in "-~"
        }

    def get_migration_operations(self, app_name: str, migration_name: str) -> List:
        """
        Retrieve the list of operations defined in a specific migration.

        Args:
            app_name (str): The Django app name.
            migration_name (str): The migration file name without `.py`.

        Returns:
            List: A list of migration operation instances.
        """
        try:
            migration_module = import_module(f"{app_name}.migrations.{migration_name}")
            migration_class = getattr(migration_module, "Migration", None)
            return getattr(migration_class, "operations", []) if migration_class else []
        except ImportError:
            self.logger.log_function_entry(
                log_text=f"Could not import migration {migration_name}.",
                logger_type=LoggingLevelEnum.DEBUG,
            )
            return []

    def get_risky_operations(self, operations: List) -> List[str]:
        """
        Filter the given migration operations to only those considered risky.

        Args:
            operations (List): List of migration operation instances.

        Returns:
            List[str]: List of operation class names that are considered risky.
        """
        return [
            op.__class__.__name__
            for op in operations
            if isinstance(op, RISKY_OPERATIONS)
        ]
