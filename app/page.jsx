import React from "react";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full Stack Web Developer </span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br /> <span className="text-accent">Charul Chim</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I specialize in building dynamic web applications with expertise in both front-end and back-end technologies, ensuring seamless and scalable digital experiences.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* Replace Button with <a> */}
              <a
                href="https://drive.google.com/file/d/1QiDfXJkQha3zG1KJMBLYi9DyakAt47v7/view?usp=sharing"  // Replace with your resume link
                target="_blank"               // Opens the resume in a new tab
                rel="noopener noreferrer"     // Security best practice
                className="uppercase flex items-center gap-2 border border-accent text-accent py-2 px-4 rounded-lg hover:bg-accent hover:text-primary transition-all duration-500"
              >
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
