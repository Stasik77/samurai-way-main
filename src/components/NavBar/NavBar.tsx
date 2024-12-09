import React from 'react';
import s from "./NavBar.module.css"

export const NavBar = () => {
    return <>

        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a>Profile</a>
            </div>
            <div className={s.item}>
                <a>Message</a>
            </div>
            <div className={s.item}>
                <a>New</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>

        </nav>
    </>
}