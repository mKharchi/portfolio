"use client"

import Link from "next/link"
import {
    FaWhatsapp, FaLinkedin
    , FaGithub
} from "react-icons/fa6"



const Footer = () => {

    const links = [{

        icon: (<FaGithub width={20} height={20} />),
        link: "https://github.com/mKharchi",
    }, {

        icon: (<FaLinkedin width={20} height={20} />),
        link: "https://www.linkedin.com/in/kharchi-merouane-32080a30b/",
    }, {

        icon: (<FaWhatsapp width={20} height={20} />),
        link: "http://wa.me/+213795736069",
    },]
    return (
        <footer className=" w-[80%] flex justify-between items-center py-4">
            <div className="w-1/2 flex items-center justify-start">
                <h1>Copyright ©2025 Kharchi Merouane</h1>
            </div>
            <div className="w-1/2 flex items-center gap-4 justify-end">
                {
                    links.map((el, index) => {
                        return (
                            <Link
                                key={index}
                                href={el.link}
                                className="p-2 rounded-md border border-foreground transform duration-200 hover:rotate-360"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {el.icon}
                            </Link>
                        )
                    })
                }

            </div>
        </footer>
    )
}

export default Footer
