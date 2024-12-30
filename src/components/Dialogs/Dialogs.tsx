import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {Message} from './Message/Message';
import {DialogItem} from './DialofItem/DialogsItem';




export const Dialogs = (props: any) => {

    let dialogsElements = props.dialogsData.map((dialog: { nane: string | undefined; id: number | undefined; })=><DialogItem name={dialog.nane} id={dialog.id}/>);

    let messagesElement = props.messagesData.map((message: { message: string | undefined; })=><Message message={message.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                    {dialogsElements}
            </div>
        <div className={s.messages}>
            {messagesElement}
            </div>
        </div>
    )
}