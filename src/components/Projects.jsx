import React from 'react';

const projects = [
    {
        title: 'Personal Portfolio',
        description: 'A modern, responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills.',
        link: '#',
    },
    {
        title: 'Weather App',
        description: 'A weather forecasting app using OpenWeatherMap API, featuring real-time updates and a sleek UI.',
        link: '#',
    },
    {
        title: 'Task Manager',
        description: 'A productivity tool to manage daily tasks, built with React and Firebase for real-time sync.',
        link: '#',
    },
];

const Projects = () => (
    <section id="projects" className="bg-gray-800 py-16 px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-cyan-400 text-center">Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <div key={idx} className="bg-gray-900 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform">
                        <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <a href={project.link} className="text-cyan-400 hover:underline">View Project</a>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
