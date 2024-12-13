import React from 'react';
import s from "./NavBar.module.css"

export const NavBar = () => {
    return <>

        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a href="/profile">Profile</a>
            </div>
            <div className={s.item}>
                <a href="/message">Message</a>
            </div>
            <div className={s.item}>
                <a href="/New">New</a>
            </div>
            <div className={s.item}>
                <a href="/Music">Music</a>
            </div>

        </nav>
    </>
}