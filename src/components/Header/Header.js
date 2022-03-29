import React from 'react';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <h1>This is a react app.</h1>
            <img src={logo} alt="" />
        </div>
    );
};

export default Header;