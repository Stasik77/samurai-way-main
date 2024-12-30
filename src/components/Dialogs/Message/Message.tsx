import s from '../Dialogs.module.css';
import React from 'react';




type DialogProps = {
    name?: string
    id?: number
    message?: string
}






export const Message = (props: DialogProps) => {
    return <div className={s.message}>{props.message}</div>
}








