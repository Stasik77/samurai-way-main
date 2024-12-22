import React from 'react';
import s from './Dialogs.module.css'



export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    Dima
                </div>
                <div className={s.dialog}>
                    oleg
                </div>
                <div className={s.dialog}>
                    valera
                </div>
                <div className={s.dialog}>
                    viktor
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