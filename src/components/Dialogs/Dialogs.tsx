import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


type DialogProps = {
    name?: string
    id?: number
    text?: string
}

const DialogItem = (props: DialogProps) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props: DialogProps) => {
    return <div className={s.message}>{props.text}</div>
}


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dima" id={1}/>
                <DialogItem name="oleg" id={2}/>
                <DialogItem name="valera" id={3}/>
                <DialogItem name="viktor" id={4}/>
            </div>
            <div className={s.messages}>
                <Message text={'hi'}/>
                <Message text={'how is yu'}/>
                <Message text={'bi'}/>

            </div>
        </div>
    )
}