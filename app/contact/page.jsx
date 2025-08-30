"use client";
import { FiCopy, FiCheck } from "react-icons/fi";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import profile from "../../src/config/profile.json";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: profile.phone,

    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: profile.email,
        link: `mailto:${profile.email}`
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: profile.address,
    }
]

import { motion } from "framer-motion";



const Contact = () => {
    const [copiedField, setCopiedField] = useState(null);
    const handleCopy = (value, title) => {
        navigator.clipboard.writeText(value); // copy to clipboard
        setCopiedField(title);
        setTimeout(() => setCopiedField(null), 2000);
    };

    return (<motion.section
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },

        }}
        className="py-6"
    >
        <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center gap-10">
                <div className="w-full max-w-xl">
                    <form className="flex flex-col gap-5 p-10 bg-[#27272c] rounded-xl">
                        <h3 className="text-4xl text-accent text-center">
                            I’m Excited to Collaborate!
                        </h3>

                        <ul className="flex flex-col gap-6">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-2xl">{item.icon}</div>
                                    </div>

                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        {item.link ? (
                                            <a href={item.link} className="text-xl text-accent hover:underline">
                                                {item.description}
                                            </a>
                                        ) : (
                                            <h3 className="text-xl">{item.description}</h3>
                                        )}
                                    </div>

                                    {(item.title === "Email" || item.title === "Phone") && (
                                        <button
                                            type="button" // prevents form submission
                                            onClick={() => handleCopy(item.description, item.title)}
                                            className="text-gray-400 hover:text-white transition"
                                        >
                                            {copiedField === item.title ? (
                                                <FiCheck className="text-green-400" />
                                            ) : (
                                                <FiCopy />
                                            )}
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </motion.section>
    );
};








export default Contact;