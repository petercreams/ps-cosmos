import React from 'react';

import { ReactComponent as Logo } from '../assets/images/Navbar/logo.svg'
import { ReactComponent as LogoDot } from '../assets/images/Navbar/logo-dot.svg'

function Header() {
    return(
        <>
        <Logo className="logo-image"/>
        <LogoDot className="logo-dot"/>
        </>
    );
}

export default Header;