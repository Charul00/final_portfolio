# Step 1: Enum for strategy types
from enum import Enum, auto


class NotificationType(Enum):
    EMAIL = auto()
    SMS = auto()
    PUSH = auto()


# Step 2: Base strategy interface
from abc import ABC, abstractmethod


class BaseNotificationStrategy(ABC):
    @abstractmethod
    def send(self, recipient: str, message: str) -> bool:
        """Send a notification. Returns True if successful"""
        pass


# Step 3: Concrete strategies
# app/notifications/strategies/email_strategy.py
from .base import BaseNotificationStrategy


class EmailNotificationStrategy(BaseNotificationStrategy):
    def send(self, recipient: str, message: str) -> bool:
        # Simulate sending email
        print(f"Sending EMAIL to {recipient}: {message}")
        return True


# app/notifications/strategies/sms_strategy.py
from .base import BaseNotificationStrategy


class SMSNotificationStrategy(BaseNotificationStrategy):
    def send(self, recipient: str, message: str) -> bool:
        # Simulate sending SMS
        print(f"Sending SMS to {recipient}: {message}")
        return True


# app/notifications/strategies/push_strategy.py
from .base import BaseNotificationStrategy


class PushNotificationStrategy(BaseNotificationStrategy):
    def send(self, recipient: str, message: str) -> bool:
        # Simulate sending Push notification
        print(f"Sending PUSH to {recipient}: {message}")
        return True


# Step 4: Processor class using enum handler
# app/notifications/processor.py
from .enums import NotificationType
from .strategies.email_strategy import EmailNotificationStrategy
from .strategies.sms_strategy import SMSNotificationStrategy
from .strategies.push_strategy import PushNotificationStrategy


class NotificationProcessor:
    """Processor selects and executes the notification strategy"""

    STRATEGY_MAP = {
        NotificationType.EMAIL: EmailNotificationStrategy,
        NotificationType.SMS: SMSNotificationStrategy,
        NotificationType.PUSH: PushNotificationStrategy,
    }

    def __init__(self, notification_type: NotificationType):
        self.strategy_class = self.STRATEGY_MAP.get(notification_type)
        if not self.strategy_class:
            raise ValueError(f"No strategy found for {notification_type}")
        self.strategy = self.strategy_class()

    def send_notification(self, recipient: str, message: str) -> bool:
        return self.strategy.send(recipient, message)


# Step 5: Usage Example
# app/notifications/demo.py
from .processor import NotificationProcessor
from .enums import NotificationType


def demo_notifications():
    processor = NotificationProcessor(NotificationType.EMAIL)
    processor.send_notification("user@example.com", "Hello via Email!")

    processor_sms = NotificationProcessor(NotificationType.SMS)
    processor_sms.send_notification("+1234567890", "Hello via SMS!")

    processor_push = NotificationProcessor(NotificationType.PUSH)
    processor_push.send_notification("user_device_token", "Hello via Push!")
