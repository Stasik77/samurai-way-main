import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


type DialogProps = {
    name?: string
    id?: number
    message?: string
}

const DialogItem = (props: DialogProps) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props: DialogProps) => {
    return <div className={s.message}>{props.message}</div>
}


let dialogsData = [
    {id: 1, nane: 'Dima'},
    {id: 2, nane: 'Oleg'},
    {id: 3, nane: 'Den'}

]

let messagesData = [
    {id: 1, message: 'you'},
    {id: 2, message: 'how is yu'},
    {id: 3, message: 'hip hop'}
]

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].nane} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].nane} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].nane} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[1].nane} id={dialogsData[1].id}/>
            </div>
        <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>

            </div>
        </div>
    )
}