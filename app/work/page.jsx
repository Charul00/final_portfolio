"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import checkMigrationsCode from "@/app/work/code_snippet/checkMigrationsCode";
import Link from "next/link";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Check migrations utility",
    title: "Check migration utility",
    code: checkMigrationsCode,
    stack: [{ name: "Python" }, { name: "Django" }],
    github: " ",
    description: `
### **Check Migrations Command**

A custom **Django management command** designed to **analyze migration files** within a specific app and detect **potentially risky database operations** (e.g., \`RemoveField\`, \`AlterField\`, \`DeleteModel\`).
________________________________________________________________________________________
________________________________________________________________________________________
🔹 **Key Features:**
* Scans and inspects all migration files of a given Django app.
* Detects risky operations that may cause **data loss, schema changes, or production issues**.
* Supports excluding specific migrations from scanning.
* Configurable flag (\`--throw-exception\`) to raise errors when risky operations are found (useful in CI/CD pipelines).
* Integrated with a **custom logging system** for better visibility of migration analysis.
________________________________________________________________________________________
________________________________________________________________________________________

🔹 **Tech Highlights:**
* Built using **Python, Django ORM & MigrationLoader**.
* Utilizes **custom logger with structured logging**.
* Leverages **importlib & pkgutil** for dynamic module discovery.
* Can be seamlessly integrated into **automated deployment workflows** to enforce database safety checks.
    `,
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Project 2",
    code: `console.log("Hello World");`,
    stack: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Next.js" },
      { name: "MongoDb" },
    ],
    github: " ",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left side info */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                {project.category}
              </h2>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* ✅ Markdown-rendered description */}
              <div className="text-white/80 text-sm leading-relaxed prose prose-invert max-w-none">
                <ReactMarkdown>{project.description}</ReactMarkdown>
              </div>
              <div className="border border-white/20"></div>
            </div>
          </div>

          {/* Right side code preview */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[660px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[1200px] bg-black rounded-lg p-4 overflow-y-auto">
                    <SyntaxHighlighter
                      language="python"
                      style={vscDarkPlus}
                      wrapLongLines={true}
                      customStyle={{
                        background: "transparent",
                        margin: 0,
                        padding: 0,
                        fontSize: "0.85rem",
                      }}
                    >
                      {project.code}
                    </SyntaxHighlighter>
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
