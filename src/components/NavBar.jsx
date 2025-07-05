'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
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
            className={`text-sm sm:text-base md:text-md font-inter font-medium transition duration-300 ease-in-out ${
                selectedLink === href
                    ? 'text-[#F0F0F0] font-semibold'
                    : 'hover:text-[#F0F0F0] text-white/80'
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

    // Scroll detection effect
    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => {
                const element = document.querySelector(link.href);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return {
                        href: link.href,
                        top: rect.top,
                        bottom: rect.bottom,
                        height: rect.height
                    };
                }
                return null;
            }).filter(Boolean);

            // Find the section that's most in view
            let currentSection = '';
            const viewportHeight = window.innerHeight;
            const scrollPosition = window.scrollY;

            // Check if we're at the very top of the page (hero section)
            if (scrollPosition < 100) {
                currentSection = '#about'; // Set About as active when at top
            } else {
                sections.forEach(section => {
                    const { href, top, bottom, height } = section;
                    
                    // Section is considered active if:
                    // 1. Top is above viewport center and bottom is below viewport center
                    // 2. Or if it's the section closest to the top when scrolling
                    if (top <= viewportHeight / 2 && bottom >= viewportHeight / 2) {
                        currentSection = href;
                    }
                });

                // If no section is in the center, find the closest one
                if (!currentSection) {
                    let closestSection = null;
                    let closestDistance = Infinity;

                    sections.forEach(section => {
                        const { href, top } = section;
                        const distance = Math.abs(top - viewportHeight / 2);
                        
                        if (distance < closestDistance && top < viewportHeight) {
                            closestDistance = distance;
                            closestSection = href;
                        }
                    });

                    currentSection = closestSection || '#about'; // Default to About if nothing found
                }
            }

            if (currentSection !== selectedLink) {
                setSelectedLink(currentSection);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        
        // Call once on mount to set initial state
        handleScroll();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [selectedLink, setSelectedLink]);

    return (
        <nav 
            className="fixed z-100 top-3 sm:top-5 left-0 w-full px-3 sm:px-4 md:px-6 lg:px-8 flex justify-center items-center"
        >
            {/* Desktop Nav */}
            <div className="hidden md:flex py-3 sm:py-4 lg:py-5 px-6 sm:px-8 lg:px-10 rounded-xl bg-black/20 backdrop-blur-lg border border-white/10 shadow-lg gap-6 sm:gap-8 lg:gap-14 items-center">
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
            <div className="flex md:hidden bg-black/20 backdrop-blur-lg border border-white/10 shadow-lg w-full max-w-sm sm:max-w-md justify-between items-center px-4 sm:px-6 py-3 sm:py-4 rounded-xl mx-auto">
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
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                        onClick={() => setMenuOpen(false)}
                    />
                    
                    {/* Menu */}
                    <div className="absolute top-16 sm:top-20 right-3 sm:right-6 w-[200px] sm:w-[240px] bg-[#04071D]/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl flex flex-col items-center gap-4 sm:gap-6 py-6 sm:py-8 md:hidden z-50">
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