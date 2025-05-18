'use client'
import Link from 'next/link'
import React from 'react'

const NavLink = ({ label, href, selectedLink, setSelectedLink }) => {
    const handleClick = (e) => {
        e.preventDefault();

        setSelectedLink(href);
        
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <Link 
            href={href} 
            onClick={handleClick}
            className={`text-md font-inter font-medium transition duration-300 ease-in-out ${
                selectedLink === href 
                    ? 'text-[#F0F0F0] font-semibold' 
                    : 'hover:text-[#F0F0F0]'
            }`}
        >
            {label}
        </Link>
    )
}

const NavBar = () => {
    const [selectedLink, setSelectedLink] = React.useState("#about");
    
    const navLinks = [
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Contact", href: "#contact" },
    ]

    return (
        <nav 
            className="fixed py-5 px-10 rounded-xl top-5 sm:top-10 flex justify-center gap-14 items-center"
            style={{
                background: "linear-gradient(90deg, #04071D 0%, #0C0E23 100%)",
                backdropFilter: "blur(10px)",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
        >
            {navLinks.map((link) => (
                <NavLink 
                    key={link.label} 
                    {...link} 
                    selectedLink={selectedLink} 
                    setSelectedLink={setSelectedLink} 
                />
            ))}
        </nav>
    )
}

export default NavBar;