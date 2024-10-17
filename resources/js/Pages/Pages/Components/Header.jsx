// resources/js/Pages/Components/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
                <li><a className="text-white hover:text-gray-400" href="#about">About</a></li>
                <li><a className="text-white hover:text-gray-400" href="#projects">Projects</a></li>
                <li><a className="text-white hover:text-gray-400" href="#skills">Skills</a></li>
                <li><a className="text-white hover:text-gray-400" href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Header;
