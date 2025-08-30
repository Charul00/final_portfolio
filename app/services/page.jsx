"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import services from "../../src/config/services.json";

//   {
//     num: "01",
//     title: "Full Stack Development",
//     description: "End-to-end web application development using modern frontend frameworks and robust Python backends.",
//     href: "#"
//   },
//   {
//     num: "02",
//     title: "Microservices",
//     description: "Designing and deploying scalable, containerized microservices with clear boundaries and resilience.",
//     href: "#"
//   },
//   {
//     num: "03",
//     title: "Open Source Contribution",
//     description: "Contributing to and maintaining open-source Python projects, improving tools for the developer community.",
//     href: "#"
//   },
//   {
//     num: "04",
//     title: "Solution Architecture",
//     description: "Architecting secure, scalable, and cost-effective systems tailored to business needs.",
//     href: "#"
//   },
//   {
//     num: "05",
//     title: "Mentorship & Code Reviews",
//     description: "Guiding teams with best practices, conducting detailed reviews, and fostering continuous learning.",
//     href: "#"
//   },
//   {
//     num: "06",
//     title: "Testing & Quality Engineering",
//     description: "Implementing automated tests, CI/CD pipelines, and quality checks for reliable software delivery.",
//     href: "#"
//   },
//   {
//     num: "07",
//     title: "API Design & Development",
//     description: "Building scalable REST and GraphQL APIs with Python frameworks like FastAPI, Flask and Django.",
//     href: "#"
//   },
// ];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}

          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline
                text-transparent group-hover:text-outline-hover transition-all
                duration-500">
                  {service.num}
                </div>
                {/* <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white
                group-hover:bg-accent transition-all duration-500 flex
                justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight  className="text-primary text-3xl"/>
                </Link> */}
              </div>
              {/* heading */}
              <h2 className="text-[42px] font-bold leading-none text-white
              group-hover:text-accent transition-all duration-500">{service.title}</h2>
              {/* description */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
