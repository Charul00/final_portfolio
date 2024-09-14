import Link from "next/link";



import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const socials=[

    {icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/charul-chim-05347a253/"},
    {icon: <FaGithub/>, path: "https://github.com/Charul00"},
    {icon: <FaTwitter/>, path: "https://x.com/CharulL0"},
]

const Social =({containerStyles, iconStyles}) =>{



    return<div className={containerStyles}>
        
        {socials.map((item, index)=>{
            return <Link key={index} href={item.path} className={iconStyles}>
                
                {item.icon}
                
                
                </Link>





        })}
        
        
        </div>
};


export default Social