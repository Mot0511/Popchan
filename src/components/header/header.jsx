import React from 'react';
import cl from './header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
        <div className={cl.header}>
            <a href={'/'}><h1 className={cl.heading}>Popchan</h1></a>
            <div className={cl.menu}>

            </div>
        </div>
        </>
    );
};

export default Header;