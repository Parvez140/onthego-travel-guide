import React from 'react';

const Footer = () => {
    const today = new Date();
    let year = today.getFullYear();
    return (
        <footer className='text-center  mt-5'>
            <p><small>copyright @ {year} <span style={{"color":"#FFBD30"}}>OnTheGo.</span></small></p>
        </footer>
    );
};

export default Footer;