import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import About from './Components/About';
import Projects from './Components/Projects';
import Experience from './Components/Experience.jsx';
import Contact from './Components/Contact';

const Home = () => {
    return (
        <div className="flex min-h-screen custom-pattern-red-bg text-white">
            <div className="hidden md:flex md:w-[30%] h-screen items-center justify-center">
                <Sidebar/>
            </div>

            <div className="flex-1 md:w-[70%] w-full md:pl-12 md:pr-12 overflow-auto p-5 pt-0">
                <Header/>
                <About/>
                <Projects/>
                <Experience/>
                <Contact/>
            </div>
        </div>
    );
};

export default Home;
