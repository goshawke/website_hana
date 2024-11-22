import React from 'react';

const Footer = () => {
    return (
        <footer className='fixed flex flex-row inset-x-0 bottom-0 h-8 justify-between items-center px-3 lg:px-8 m-0 bg-black'>
            <h2 className='text-gray-400 text-xs md:text-sm lg:text-xl align-middle'>Norton Designs</h2>
            <p className='text-gray-400 text-xs md:text-sm lg:text-xl align-middle'>circa 2024</p>
        </footer>
    );
};

export default Footer;