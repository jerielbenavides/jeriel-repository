import React, { useState } from 'react';
import { FaUser, FaFolderOpen, FaBriefcase, FaEnvelope } from 'react-icons/fa'; // Example icon library

const Sidebar = () => {
    // State to keep track of the active section
    const [activeSection, setActiveSection] = useState('');

    // Function to update active section
    const handleLinkClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="w-[30%] custom-pattern-bg text-white h-screen fixed flex flex-col items-center pt-20">
            <div className="text-left">
                <h1 className="text-4xl font-bold">Jeriel Benavides</h1>
                <h3 className="text-2xl mt-2">Software Engineer</h3>
                <div className="border-b border-gray-700 my-4 w-full"></div>
                <nav className="flex flex-col py-10">
                    <span
                        className={`relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-tropicalCyan after:w-full after:scale-x-0 ${
                            activeSection === 'about' ? 'text-tropicalCyan after:scale-x-100' : ''
                        } after:transition after:duration-300 after:origin-center`}>
                        <a
                            href="#about"
                            className={`py-2 flex items-center transition duration-200 ease-in-out ${
                                activeSection === 'about' ? 'text-tropicalCyan' : ''
                            }`}
                            onClick={() => handleLinkClick('about')}>
                            <FaUser className="mr-2" /> About
                        </a>
                    </span>
                    <span
                        className={`relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-tropicalCyan after:w-full after:scale-x-0 ${
                            activeSection === 'projects' ? 'text-tropicalCyan after:scale-x-100' : ''
                        } after:transition after:duration-300 after:origin-center`}>
                        <a
                            href="#projects"
                            className={`py-2 flex items-center transition duration-200 ease-in-out ${
                                activeSection === 'projects' ? 'text-tropicalCyan' : ''
                            }`}
                            onClick={() => handleLinkClick('projects')}>
                            <FaFolderOpen className="mr-2" /> Projects
                        </a>
                    </span>
                    <span
                        className={`relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-tropicalCyan after:w-full after:scale-x-0 ${
                            activeSection === 'experience' ? 'text-tropicalCyan after:scale-x-100' : ''
                        } after:transition after:duration-300 after:origin-center`}>
                        <a
                            href="#experience"
                            className={`py-2 flex items-center transition duration-200 ease-in-out ${
                                activeSection === 'experience' ? 'text-tropicalCyan' : ''
                            }`}
                            onClick={() => handleLinkClick('experience')}>
                            <FaBriefcase className="mr-2" /> Experience
                        </a>
                    </span>
                    <span
                        className={`relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-tropicalCyan after:w-full after:scale-x-0 ${
                            activeSection === 'contact' ? 'text-tropicalCyan after:scale-x-100' : ''
                        } after:transition after:duration-300 after:origin-center`}>
                        <a
                            href="#contact"
                            className={`py-2 flex items-center transition duration-200 ease-in-out ${
                                activeSection === 'contact' ? 'text-tropicalCyan' : ''
                            }`}
                            onClick={() => handleLinkClick('contact')}>
                            <FaEnvelope className="mr-2" /> Contact
                        </a>
                    </span>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
