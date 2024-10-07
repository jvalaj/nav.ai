import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white text-center py-4">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Nav AI. Built by Jvalaj Pandey, Harshit Suri & Adyatan Dagar.
            </p>
        </footer>
    );
};

export default Footer;
