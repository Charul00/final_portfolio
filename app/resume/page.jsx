"use client";

import { Description } from "@radix-ui/react-dialog";
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

import { SiTailwindcss, SiNextdotjs, SiPython, SiDjango, SiFlask, SiFastapi, SiRabbitmq, SiCelery, SiElasticsearch, SiKubernetes, SiHeroku, SiApachekafka, SiGraphql, Si365Datascience, SiDocker, SiMicrosoftazure, SiJson, SiBootstrap, SiSwagger, SiJsonwebtokens, SiPostman, SiFirebase, SiSnyk, SiPostgresql, SiMysql, SiMongodb, SiNeo4J, SiSqlite } from "react-icons/si";




// about data
const about = {
    title: "About me",
    description: "",
    info: [
        { fieldName: "Name", fieldValue: "Samir Saitwal" },
        { fieldName: "Phone", fieldValue: "(+91) 8999395349" },
        { fieldName: "Experience", fieldValue: "5+ years" },
        // { fieldName: "Skype", fieldValue: "" },
        { fieldName: "Nationality", fieldValue: "Indian" },
        { fieldName: "Email", fieldValue: "saitwalsamir@gmail.com" },
        { fieldName: "Freelance", fieldValue: "Available" },
        { fieldName: "Languages", fieldValue: "English, Hindi, Marathi" },
        { fieldName: "Open to relocation & US opportunities", fieldValue: "Available" },
    ],
};

// education
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description: "",
    items: [
        {
            institution: "P. R. pote college of engineering",
            // degree: "",
            duration: "2014-2018",
        },




    ],
};

// skills data
const skills = {
    title: "My skills",
    description: "",
    categories: [
        {
            category: "Languages",
            items: [
                { icon: <SiPython />, name: "Python" },
                { icon: <FaHtml5 />, name: "HTML 5" },
                { icon: <FaCss3 />, name: "CSS 3" },
                { icon: <FaJs />, name: "JavaScript" },
            ],
        },
        {
            category: "Frameworks & Libraries",
            items: [
                { icon: <FaReact />, name: "React.js" },
                { icon: <SiDjango />, name: "Django" },
                { icon: <SiFlask />, name: "Flask" },
                { icon: <SiFastapi />, name: "FastAPI" },
                { icon: <FaNodeJs />, name: "Node.js" },
                { icon: <SiBootstrap />, name: "Bootstrap" },
                { icon: <SiGraphql />, name: "GraphQL" },
                { icon: <SiSwagger />, name: "Swagger" },
                { icon: <SiCelery />, name: "Celery" },
            ],
        },
        {
            category: "Cloud & DevOps",
            items: [
                { icon: <FaAws />, name: "AWS" },
                { icon: <SiMicrosoftazure />, name: "Microsoft Azure" },
                { icon: <SiFirebase />, name: "Firebase" },
                { icon: <SiDocker />, name: "Docker" },
                { icon: <SiKubernetes />, name: "Kubernetes" },
                { icon: <SiHeroku />, name: "Heroku" },
            ],
        },
        {
            category: " Messaging",
            items: [
                { icon: <SiRabbitmq />, name: "RabbitMQ" },
                { icon: <SiApachekafka />, name: "Kafka" },
                { icon: <SiElasticsearch />, name: "Elasticsearch" },
            ],
        },
        {
            category: "Tools",
            items: [
                { icon: <SiPostman />, name: "Postman" },
                { icon: <SiSnyk />, name: "Snyk" },
            ],
        },
        {
            category: "Databases",
            items: [
                { icon: <SiPostgresql />, name: "PostgreSQL" },
                { icon: <SiMysql />, name: "MySQL" },
                { icon: <SiMongodb />, name: "MongoDB" },
                { icon: <SiNeo4J />, name: "Neo4J" },
                { icon: <SiSqlite />, name: "SQLite" },
            ],
        },
    ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const Resume = () => {
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
                <Tabs defaultValue="education" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">

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
                                    {education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {

                                            return (

                                                <li key={index} className="bg-[#232329] h-[184px] py-6
                                            px-10 rounded-xl flex flex-col justify-center items-center item-center
                                            lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>


                                                    <h3>{item.degree}</h3>
                                                    <div>

                                                        {/*  dot */}


                                                        <p>{item.institution}</p>
                                                    </div>



                                                </li>
                                            );



                                        })}
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

                                {/* Loop through categories */}
                                {skills.categories.map((category, idx) => (
                                    <div key={idx} className="mb-8">
                                        {/* Category Title */}
                                        <h4 className="text-2xl font-semibold text-accent mb-4">
                                            {category.category}
                                        </h4>

                                        {/* Skills Grid */}
                                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                                            {category.items.map((skill, index) => (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger
                                                                className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group"
                                                            >
                                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                    {skill.icon}
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
                                <h3 className="text-4xl font-bold">
                                    {about.title}
                                </h3>

                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>

                                {/* Grid layout update for vertical alignment */}
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[820px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => (
                                        <li key={index} className="flex flex-col xl:flex-row items-start xl:items-center gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>






                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
}

export default Resume;
