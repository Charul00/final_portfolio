"use client";
import { Description } from "@radix-ui/react-dialog";
import experience from "../../src/config/experience.json";
import education from "../../src/config/education.json";
import profile from "../../src/config/profile.json";
import skillsData from "../../src/config/skills_data.json";
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaDatabase,
    FaAws,
} from "react-icons/fa";
import { FiCopy, FiCheck } from "react-icons/fi"; // ✅ import icons
import { useEffect, useState } from "react";

import { SiTailwindcss, SiNextdotjs, SiPython, SiDjango, SiFlask, SiFastapi, SiRabbitmq, SiCelery, SiElasticsearch, SiKubernetes, SiHeroku, SiApachekafka, SiGraphql, Si365Datascience, SiDocker, SiMicrosoftazure, SiJson, SiBootstrap, SiSwagger, SiJsonwebtokens, SiPostman, SiFirebase, SiSnyk, SiPostgresql, SiMysql, SiMongodb, SiNeo4J, SiSqlite } from "react-icons/si";
const iconMap = {
    SiPython: <SiPython />,
    FaHtml5: <FaHtml5 />,
    FaCss3: <FaCss3 />,
    FaJs: <FaJs />,
    FaReact: <FaReact />,
    SiDjango: <SiDjango />,
    SiFlask: <SiFlask />,
    SiFastapi: <SiFastapi />,
    FaNodeJs: <FaNodeJs />,
    SiBootstrap: <SiBootstrap />,
    SiGraphql: <SiGraphql />,
    SiSwagger: <SiSwagger />,
    SiCelery: <SiCelery />,
    FaAws: <FaAws />,
    SiMicrosoftazure: <SiMicrosoftazure />,
    SiFirebase: <SiFirebase />,
    SiDocker: <SiDocker />,
    SiKubernetes: <SiKubernetes />,
    SiHeroku: <SiHeroku />,
    SiRabbitmq: <SiRabbitmq />,
    SiApachekafka: <SiApachekafka />,
    SiElasticsearch: <SiElasticsearch />,
    SiPostman: <SiPostman />,
    SiSnyk: <SiSnyk />,
    SiPostgresql: <SiPostgresql />,
    SiMysql: <SiMysql />,
    SiMongodb: <SiMongodb />,
    SiNeo4J: <SiNeo4J />,
    SiSqlite: <SiSqlite />
};
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { formatDuration, intervalToDuration } from "date-fns";

import { ScrollArea } from "@radix-ui/react-scroll-area";
// skills data
const skills = {
    title: "My skills",
    description: "",
    categories: skillsData
};


const Resume = () => {
    const [copiedField, setCopiedField] = useState(null);
    const [durations, setDurations] = useState({});
    useEffect(() => {
        const updateDurations = () => {
            const newDurations = {};
            experience.items.forEach((item, idx) => {
                const [startStr, endStr] = item.duration.split(" - ");
                const startDate = new Date(startStr);
                const endDate = endStr === "Present" ? new Date() : new Date(endStr);
                newDurations[idx] = formatDuration(intervalToDuration({ start: startDate, end: endDate }));
            });
            setDurations(newDurations);
        };

        updateDurations(); // initial call
        const interval = setInterval(updateDurations, 1000); // update every second

        return () => clearInterval(interval); // cleanup on unmount
    }, []);
    const handleCopy = (value, label) => {
        navigator.clipboard.writeText(value);
        setCopiedField(label);
        setTimeout(() => setCopiedField(null), 2000); // reset after 2s
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                {item.duration}
                                                <h3>{item.degree}</h3>
                                                <p>{item.institution}</p>
                                                <p className="text-sm text-right">- {item.location}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[10px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <ScrollArea className="h-[100px]">
                                    <ul className="grid grid-cols-1 gap-[10px]">
                                        {experience.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className="bg-[#232329] p-6 rounded-xl flex flex-col gap-4 text-left"
                                            >
                                                <h4 className="text-2xl font-semibold text-accent">
                                                    {item.company}
                                                </h4>
                                                <p className="text-[12px]">{item.duration} : {durations[index]}</p>
                                                <p className="text-[20px] font-semibold underline">Profile: {item.profile}</p>
                                                <p className="text-[13px]">{item.jobDescription}</p>
                                                <div>
                                                    <p className="font-semibold">
                                                        Project: {item.projectName}
                                                    </p>
                                                    <p className="text-[13px] text-white/90 whitespace-normal break-words">
                                                        {item.projectDescription}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="font-semibold">
                                                        Domain: {item.domain}
                                                    </p>
                                                    <p className="font-semibold">
                                                        Job Location: {item.job_location}
                                                    </p>
                                                </div>
                                                {item.url && (
                                                    <a
                                                        href={item.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-accent hover:underline"
                                                    >
                                                        View Project
                                                    </a>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>

                                {skills.categories.map((category, idx) => (
                                    <div key={idx} className="mb-8">
                                        <h4 className="text-2xl font-semibold text-accent mb-4">
                                            {category.category}
                                        </h4>
                                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                                            {category.items.map((skill, index) => (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                    {iconMap[skill.icon]} {/* 👈 updated */}
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        {/* about me */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{profile.name}</h3>
                                <p className="max-w-[920px] text-white/60 mx-auto xl:mx-0">
                                    {profile.description}
                                </p>

                                <ul className="grid grid-cols-2 xl:grid-cols-2 gap-x-12 gap-y-5 max-w-[920px] mx-auto xl:mx-0">
                                    {[
                                        { label: "Phone", value: profile.phone, copyable: true },
                                        { label: "Email", value: profile.email, copyable: true },
                                        { label: "Experience", value: profile.experience },
                                        { label: "Nationality", value: profile.nationality },
                                        { label: "Freelance", value: profile.freelance },
                                        { label: "Languages", value: profile.languages },
                                        { label: "Date of Birth", value: profile.date_of_birth },
                                        { label: "Open to relocation & US opportunitie", value: profile.relocation },
                                    ].map(
                                        (item, index) =>
                                            item.value && (
                                                <li
                                                    key={index}
                                                    className="flex flex-col xl:flex-row items-start xl:items-center gap-4"
                                                >
                                                    <span className="text-white/60">{item.label}</span> :
                                                    <span className="text-xl flex items-center gap-2">
                                                        {item.value}
                                                        {item.copyable && (
                                                            <button
                                                                onClick={() => handleCopy(item.value, item.label)}
                                                                className="text-gray-400 hover:text-white transition"
                                                            >
                                                                {copiedField === item.label ? (
                                                                    <FiCheck className="text-green-400" />
                                                                ) : (
                                                                    <FiCopy />
                                                                )}
                                                            </button>
                                                        )}
                                                    </span>
                                                </li>
                                            )
                                    )}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
