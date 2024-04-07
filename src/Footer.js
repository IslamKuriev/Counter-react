import React from 'react';
import FooterLogo from './Footer.logo';
import FooterMenu from './FooterMenu';
import Copyright from './Copyright';

const Footer = () => {
    return (
        <div className='footer'>
            <FooterLogo />
            <FooterMenu />
            <Copyright />
        </div>
    );
};

export default Footer;