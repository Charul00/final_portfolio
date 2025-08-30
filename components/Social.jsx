import Link from "next/link";
import profile from "../src/config/profile.json";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
const socials = [
    { icon: <FaLinkedin />, path: profile.linkedin },
    { icon: <FaGithub />, path: profile.github },
]

const Social = ({ containerStyles, iconStyles }) => {



    return <div className={containerStyles}>

        {socials.map((item, index) => {
            return <Link
                key={index}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className={iconStyles}
            >
                {item.icon}
            </Link>
        })}

    </div>
};


export default Social