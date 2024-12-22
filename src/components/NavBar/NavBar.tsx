import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from 'react-router-dom';

export const NavBar = () => {
    return <>

        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/New" activeClassName={s.active}>New</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Music" activeClassName={s.active}>Music</NavLink>
            </div>

        </nav>
    </>
}