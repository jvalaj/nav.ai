import React from 'react';
import circlelogo from "../assets/circlelogo.png"

const Navbar = () => {
    return (
        <nav className="bg-transparent border-gray-600 border-b-[0.03rem] text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <img src={circlelogo} height={50} width={50} alt="Nav AI Logo" />

                <ul className="flex gap-8 text-md">
                    <li><a href="#" className="hover:text-blue-600">home</a></li>
                    <li><a href="#features" className="hover:text-blue-600">features</a></li>
                    <li><a href="#about" className="hover:text-blue-600">about</a></li>
                    <li><a href="#contact" className="hover:text-blue-600">contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
