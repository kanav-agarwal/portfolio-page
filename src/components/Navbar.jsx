import React from 'react';

const Navbar = () => (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">
        <div className="text-2xl font-bold tracking-tight">Kanav Agarwal</div>
        <ul className="flex space-x-8 text-lg">
            <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
        </ul>
    </nav>
);

export default Navbar;
