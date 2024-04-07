import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

const Header = () => {
    return (
        <>
          <div className='header-container'>
          <Logo />
          <Menu />
          </div>  
        </>
    );
};


export default Header;