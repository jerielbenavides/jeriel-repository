import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: 'JP Auctions',
        description: 'Online auction platform built with Laravel and Vue 3, leveraging Inertia.js for a seamless SPA experience. It features real-time proxy bidding, email notifications, Stripe payment integration, and a featured-packed admin dashboard.',
        tags: ['Laravel', 'Vue', 'Inertia', 'Tailwind CSS'],
        imageUrl: `${import.meta.env.VITE_APP_URL}/img/jpauctions.jpg`,
        githubUrl: '',
        liveUrl: 'https://jpauctions.ca',
    },
    {
        title: 'Equipment Signout',
        description: 'Inventory management and booking system built with Vue 2, PHP, and MySQL. Features include user authentication, viewing available items, reservations, pickup confirmation codes, and real time inventory updates.',
        tags: ['PHP', 'MySQL', 'Vue 2'],
        imageUrl: `${import.meta.env.VITE_APP_URL}/img/signoutBanner.webp`,
        githubUrl: 'https://github.com/jerielbenavides/vue_items_checkout',
        liveUrl: 'https://portfolio.jerielbenavides.com/signout/',
    },
    {
        title: 'WAT9S',
        description: 'WAT9S is an interactive game built using GSAP and JavaScript.',
        tags: ['GSAP', 'JavaScript'],
        imageUrl: `${import.meta.env.VITE_APP_URL}/img/wat9sBanner.webp`,
        githubUrl: 'https://github.com/jerielbenavides/wat9s',
        liveUrl: 'https://portfolio.jerielbenavides.com/wat9s/',
    },
    {
        title: 'Animated Emojis',
        description: 'Animated emojis built using GSAP, SVGs, and JavaScript.',
        tags: ['GSAP', 'JavaScript'],
        githubUrl: 'https://github.com/jerielbenavides/gsap_animated_emojis',
        imageUrl: `${import.meta.env.VITE_APP_URL}/img/emojiBanner.webp`,
        liveUrl: 'https://portfolio.jerielbenavides.com/animated_emoji/',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-12">
            <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-forrestTeal shadow-lg rounded-lg overflow-hidden hover:bg-indigo-600 transition duration-500 hover:scale-105 flex flex-col"
                    >
                        {/* Image on top */}
                        <div className="w-full aspect-w-16 aspect-h-9">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                            <p className="text-white text-sm mb-4">{project.description}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-paleSkyBlue text-black text-sm font-semibold px-3 py-1 rounded-full shadow-lg hover:bg-yellow-400"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-end mt-auto space-x-4">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-gray-300"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-gray-300"
                                    >
                                        <FaExternalLinkAlt size={20} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
