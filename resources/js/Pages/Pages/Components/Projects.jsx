import React from 'react';

// Example projects array with image URLs
const projects = [
    {
        title: 'Project 1',
        description: 'A brief description of Project 1.',
        tags: ['React', 'Tailwind CSS', 'Node.js'],
        imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
        title: 'Project 2',
        description: 'A brief description of Project 2.',
        tags: ['Vue.js', 'Laravel', 'Inertia.js'],
        imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
        title: 'Project 3',
        description: 'A brief description of Project 3.',
        tags: ['PHP', 'MySQL', 'Bootstrap'],
        imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-12">
            <h2 className="text-4xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="flex bg-white shadow-lg rounded-lg overflow-hidden">
                        {/* Image Section */}
                        <div className="w-1/3">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="object-cover h-full w-full"
                            />
                        </div>

                        {/* Text and Tags Section */}
                        <div className="w-2/3 p-6">
                            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-200 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
