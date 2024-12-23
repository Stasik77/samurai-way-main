import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';



export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                 <NavLink to="/dialogs/1">Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">oleg</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">valera</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">viktor</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>hi</div>
                <div className={s.message}>how is yu</div>
                <div className={s.message}>bi</div>
            </div>
        </div>
    )
}