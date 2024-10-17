// resources/js/Pages/Components/Contact.jsx
import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20">
            <h2 className="text-3xl font-bold text-center">Contact Me</h2>
            <form className="mt-8 max-w-2xl mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="name">Name</label>
                    <input
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        type="text"
                        id="name"
                        placeholder="Your Name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="email">Email</label>
                    <input
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        type="email"
                        id="email"
                        placeholder="Your Email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="message">Message</label>
                    <textarea
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        id="message"
                        rows="4"
                        placeholder="Your Message"
                    />
                </div>
                <button
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                    type="submit"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;
