import React from 'react';

const experiences = [
    {
        title: 'Full Stack Web Developer',
        company: 'JP Auctions',
        description: 'At JP Auctions, I currently lead the development of a full-scale auction platform using Laravel, Vue.js, and Tailwind CSS. I\'ve integrated payment processing systems, optimized SEO to boost visibility, and implemented real-time bidding features. My focus is on delivering a seamless experience for both buyers and sellers while managing server deployments to ensure the platform stays secure and performs well.',
        tags: [],
        years: '2023 - Current',
    },
    {
        title: 'Web Developer',
        company: 'Creative Agency',
        description: 'Built responsive websites using Vue.js, Laravel, and Tailwind CSS.',
        tags: ['Vue.js', 'Laravel', 'Tailwind CSS'],
        years: '2017 - 2020',
    },
    {
        title: 'Junior Developer',
        company: 'Startup Inc.',
        description: 'Assisted in developing internal tools and APIs using PHP and MySQL.',
        tags: ['PHP', 'MySQL', 'API Development'],
        years: '2015 - 2017',
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-12">
            <h2 className="text-4xl font-bold mb-8">Experience</h2>
            <div className="grid grid-cols-1 gap-6">
                {experiences.map((experience, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row bg-forrestTeal shadow-lg rounded-lg overflow-hidden hover:bg-indigo-600 transition duration-500 hover:scale-105"
                    >
                        {/* Year Section */}
                        <div className="w-full md:w-1/3 bg-gray-100 flex items-center md:justify-center p-6 pb-0">
                            <span className="text-lg font-semibold text-gray-700">
                                {experience.years}
                            </span>
                        </div>

                        <div className="w-full md:w-2/3 p-6">
                            <h3 className="text-2xl font-semibold mb-1">{experience.title}</h3>
                            <p className="text-lg font-medium mb-2 text-gray-600">{experience.company}</p>
                            <p className="text-gray-700 text-sm mb-4">{experience.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {experience.tags.map((tag, i) => (
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

export default Experience;
