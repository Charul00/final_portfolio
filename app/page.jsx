import React from "react";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import profile from "../src/config/profile.json";
const Home = () => {

  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto h-full px-4"> {/* Limit width & add padding */}
        <div className="flex flex-col xl:flex-row items-start xl:items-center xl:pt-8 xl:pb-24 gap-12 w-full">
          {/* text */}
          <div className="flex-1 w-full text-left">
            <span className="text-xl">{profile.job_profile}</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br /> <span className="text-accent">{profile.name}</span>
            </h1>
            <p className="text-white/80 mb-9">{profile.description}</p>
            <div className="flex flex-col xl:flex-row items-start xl:items-center gap-4">
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase flex items-center gap-2 border border-accent text-accent py-2 px-4 rounded-lg hover:bg-accent hover:text-primary transition-all duration-500"
              >
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </a>
              <Social
                containerStyles="flex gap-6 mt-4 xl:mt-0"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
