import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import About from './Components/About';
import Projects from './Components/Projects';
import Experience from './Components/Experience.jsx';
import Contact from './Components/Contact';

const Home = () => {
    return (
        <div className="flex min-h-screen bg-gradient-to-r from-verdigris to-prussianBlue text-gray-900 p-5 md:p-10">
            <div className="hidden md:flex md:w-[40%] bg-gray-200 h-screen items-center justify-center">
                <Sidebar/>
            </div>

            <div className="flex-1 md:w-[60%] w-full md:pl-12 overflow-auto">
                <Header/>
                <section id="hero"
                         className="flex flex-col items-center justify-center h-screen text-center bg-blue-600 text-white">
                    <h1 className="text-5xl font-bold">Jeriel</h1>
                    <p className="mt-4">Lorem ipsum.</p>
                </section>
                <About/>
                <Projects/>
                <Experience/>
                <Contact/>
            </div>
        </div>
    );
};

export default Home;
