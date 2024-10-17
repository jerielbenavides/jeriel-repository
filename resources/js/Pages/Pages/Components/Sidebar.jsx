// resources/js/Pages/Components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
    return (
        <div className="w-[40%] bg-gray-800 text-white h-screen fixed flex flex-col items-center pt-20">
            <div>
                <h1 className="text-4xl">Jeriel Benavides</h1>
                <h3>Software Engineer & Full Stack Web Developer</h3>
                <nav className="flex flex-col py-10">
                    <a href="#about" className="py-2 px-4 hover:bg-gray-700">About</a>
                    <a href="#projects" className="py-2 px-4 hover:bg-gray-700">Projects</a>
                    <a href="#experience" className="py-2 px-4 hover:bg-gray-700">Experience</a>
                    <a href="#contact" className="py-2 px-4 hover:bg-gray-700">Contact</a>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
