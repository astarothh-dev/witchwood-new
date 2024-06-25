import React from 'react';

const Footer = () => {
    return (
        

<footer className="bg-black rounded-lg shadow  m-4 mt-24">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="http://witchwood.uk" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="title.png" className="h-20 invert" alt="Witchwood Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#about" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#projects" className="hover:underline me-4 md:me-6">Projects</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="http://witchwood.uk" className="hover:underline">Witchwood™</a>. All Rights Reserved.</span>
    </div>
</footer>


    );
};

export default Footer;