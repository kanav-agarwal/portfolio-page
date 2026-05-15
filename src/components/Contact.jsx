import React from 'react';

const Contact = () => (
    <section id="contact" className="max-w-2xl mx-auto py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-cyan-400">Contact</h2>
        <p className="text-lg text-gray-300 mb-8">Feel free to reach out for collaborations or just a friendly hello!</p>
        <a
            href="mailto:kanav.agarwal@email.com"
            className="inline-block bg-cyan-400 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-cyan-300 transition"
        >
            Email Me
        </a>
    </section>
);

export default Contact;
