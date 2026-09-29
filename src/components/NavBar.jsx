'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const navLinks = [
    { label: "About", href: "#about" },   { label: "Experience", href: "#experience" },
 
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const NavLink = ({ label, href, selectedLink, setSelectedLink, onClick }) => {
    const handleClick = (e) => {
        e.preventDefault();
        setSelectedLink(href);
        document.querySelector(href)?.scrollIntoView();
        if (onClick) onClick(); // Close mobile menu if needed
    };

    return (
        <Link 
            href={href}
            onClick={handleClick}
            className={`text-sm font-inter font-medium transition-colors duration-150 ${
                selectedLink === href
                    ? 'text-[#F0F0F0] font-semibold'
                    : 'hover:text-[#F0F0F0] text-white/80'
            }`}
        >
            {label}
        </Link>
    )
}

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedLink, setSelectedLink] = useState("#about");

    // Use IntersectionObserver instead of measuring every section on every scroll frame.
    useEffect(() => {
        const sections = navLinks
            .map(({ href }) => document.querySelector(href))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visibleSection) {
                    setSelectedLink(`#${visibleSection.target.id}`);
                }
            },
            { rootMargin: "-25% 0px -55%", threshold: [0, 0.25, 0.5, 0.75, 1] },
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [setSelectedLink]);

    return (
        <nav 
            className="fixed z-100 top-3 sm:top-5 left-0 w-full px-3 sm:px-4 md:px-6 lg:px-8 flex justify-center items-center"
        >
            {/* Desktop Nav */}
            <div className="hidden md:flex py-3 sm:py-4 lg:py-5 px-6 sm:px-8 lg:px-10 rounded-xl bg-[#04071D]/90 border border-white/10 shadow-lg gap-6 sm:gap-8 lg:gap-14 items-center">
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
            <div className="flex md:hidden bg-[#04071D]/90 border border-white/10 shadow-lg w-full max-w-sm sm:max-w-md justify-between items-center px-4 sm:px-6 py-3 sm:py-4 rounded-xl mx-auto">
                <span className="text-white font-bold text-lg">
                    <Image 
                        width={32} 
                        height={32} 
                        className='bg-white object-cover rounded-full w-7 h-7 sm:w-8 sm:h-8' 
                        alt='logo' 
                        src={"/m.svg"} 
                    />
                </span>
                <button
                    aria-label="Open navigation menu"
                    className="text-white focus:outline-none hover:text-[#CBACF9] transition-colors duration-300"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg width="24" height="24" className="sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16"/>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/70 z-40 md:hidden"
                        onClick={() => setMenuOpen(false)}
                    />
                    
                    {/* Menu */}
                    <div className="absolute top-16 sm:top-20 right-3 sm:right-6 w-[200px] sm:w-[240px] bg-[#04071D] border border-white/10 rounded-xl shadow-2xl flex flex-col items-center gap-4 sm:gap-6 py-6 sm:py-8 md:hidden z-50">
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
                </>
            )}
        </nav>
    )
}

export default NavBar;