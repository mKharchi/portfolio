import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Card = ({ title, technologies, description, image, link }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`card shadow-[0px_4px_16px_rgba(54,126,8,0.3)] ${isExpanded ? 'h-[750px]' : 'h-[430px]'} w-[360px] group gap-2 rounded-lg relative flex justify-end flex-col p-4 pt-6 z-50 overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 transition-all duration-300`}>

            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/20 rounded-lg" />

            {/* Main content container */}
            <div className="container text-white z-[2] relative font-nunito h-full flex flex-col py-4 gap-2">

                {/* Image container */}
                <div className='h-[240px] mt-4 w-full flex flex-col justify-start rounded-lg overflow-hidden'>
                    {image ? (
                        <Image
                            src={image}
                            alt={title || 'Project image'}
                            width={512}
                            height={512}
                            className='h-full w-full object-fill object-top hover:scale-105 transition-transform duration-300'
                            priority
                        />
                    ) : (
                        <div className='h-full w-full bg-gray-700 flex items-center justify-center rounded-lg'>
                            <span className='text-gray-400'>No image available</span>
                        </div>
                    )}
                </div>

                {/* Title section */}
                <div className="h-fit w-full mt-2">
                    <Link target='_blank' href={link}>
                        <h1
                            className="card_heading text-xl tracking-[.2em] font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-lg"
                            style={{
                                fontWeight: 900,
                                textShadow: '0 0 10px rgba(255,255,255,0.5)'
                            }}
                        >
                            {title}
                        </h1></Link>
                </div>

                {/* Technologies section */}
                <div className="flex justify-start items-center h-fit w-full gap-2 flex-wrap">
                    {technologies && technologies.length > 0 ? (
                        technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="border-2 border-white/80 rounded-lg text-white font-nunito text-sm font-medium px-3 py-1 hover:bg-white hover:text-gray-800 transition-all duration-300 cursor-pointer backdrop-blur-sm bg-white/10"
                            >
                                <p>{tech}</p>
                            </div>
                        ))
                    ) : (
                        <div className="text-gray-400 text-sm">No technologies specified</div>
                    )}
                </div>

                {/* Toggle button for all devices */}
                <div className="flex justify-center mt-2">
                    <button
                        onClick={toggleExpanded}
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/40 rounded-full px-4 py-2 text-white text-sm font-medium transition-all duration-300 flex items-center gap-2"
                    >
                        {isExpanded ? (
                            <>
                                Hide Details
                                <svg className="w-4 h-4 transform rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </>
                        ) : (
                            <>
                                Show Details
                                <svg className="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Description section - expands on click */}
            <div className={`font-nunito text-white font-light relative ${isExpanded ? 'h-[350px]' : 'h-0'} leading-[1.4em] duration-500 overflow-hidden z-[3] bg-gradient-to-t from-gray-900/95 to-transparent p-4 rounded-b-lg`}>
                <p className={`${isExpanded ? 'flex' : 'hidden'} transition-all duration-300 delay-200`}>
                    {description || 'No description available'}
                </p>
            </div>
        </div>
    );
}

export default Card;