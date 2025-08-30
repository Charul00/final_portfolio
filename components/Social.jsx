import Link from "next/link";



import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const socials = [

    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/samir-saitwal-b517a0148/" },
    { icon: <FaGithub />, path: "https://github.com/samir321-pixel" },
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