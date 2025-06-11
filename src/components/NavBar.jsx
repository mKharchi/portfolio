'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
const NavLink = ({ label, href, selectedLink, setSelectedLink, onClick }) => {
    const handleClick = (e) => {
        e.preventDefault();
        setSelectedLink(href);
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
        if (onClick) onClick(); // Close mobile menu if needed
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

const NavBar = ({ selectedLink, setSelectedLink }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "My approach", href: "#my_approach" },
        { label: "Contact", href: "#contact" },
    ]

    return (
        <nav 
            className="fixed z-50 top-5 left-0 w-full px-4 flex justify-center items-center"
        >
            {/* Desktop Nav */}
            <div className="hidden sm:flex py-5 px-10 rounded-xl mt-5 gap-14 items-center">
                {navLinks.map((link) => (
                    <NavLink 
                        key={link.label} 
                        {...link} 
                        selectedLink={selectedLink} 
                        setSelectedLink={setSelectedLink} 
                    />
                ))}
            </div>
            {/* Mobile Nav */}
            <div className="flex sm:hidden bg-background w-full justify-between items-center px-6 mx-0 py-4 rounded-xl">
                <span className="text-white font-bold text-lg">
                    <Image width={256} height={256} className='bg-white object-cover rounded-full w-8 h-8' src={"/m.svg"} />
                </span>
                <button
                    aria-label="Open navigation menu"
                    className="text-white focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16"/>
                    </svg>
                </button>
            </div>
            {menuOpen && (
                <div className="absolute top-16 right-10 w-[40vw] max-w-xs bg-[#04071D] rounded-xl shadow-lg flex flex-col items-center gap-6 py-8 sm:hidden z-50">
                    {navLinks.map((link) => (
                        <NavLink 
                            key={link.label} 
                            {...link} 
                            selectedLink={selectedLink} 
                            setSelectedLink={setSelectedLink} 
                            onClick={() => setMenuOpen(false)}
                        />
                    ))}
                </div>
            )}
        </nav>
    )
}

export default NavBar;