import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white text-center py-4">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Nav AI. All rights reserved.
            </p>
            <p className="text-xs">
                Follow us on{' '}
                <a href="https://twitter.com/yourprofile" className="underline hover:text-gray-400">
                    Twitter
                </a>{' '}
                |{' '}
                <a href="https://github.com/yourprofile" className="underline hover:text-gray-400">
                    GitHub
                </a>
            </p>
        </footer>
    );
};

export default Footer;
