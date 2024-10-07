import React from 'react';
import { Link } from 'react-scroll'; // Import the Link component
import circlelogo from "../assets/circlelogo.png";

const Navbar = () => {
    return (
        <nav className="bg-transparent  border-gray-600 border-b-[0.03rem] text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <img src={circlelogo} height={50} width={50} alt="Nav AI Logo" />

                <ul className="flex gap-8 text-sm">
                    <li>
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="hover:text-blue-600 cursor-pointer"
                        >
                            home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="hover:text-blue-600 cursor-pointer"
                        >
                            about
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="hover:text-blue-600 cursor-pointer"
                        >
                            contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
};

export default Navbar;
