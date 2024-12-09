import React from 'react';
import s from "./MyPost.module.css"
import {Post} from "./Post/Post";

export const MyPost = () => {
    return <>
            my post
            <div>
                new post
            </div>
            <div className={s.contant}>
            <Post message="Hi how are you" like={15}/>
            <Post message="its my 1 post" like={15}/>
            <Post message="its my 1 post" like={15}/>


        </div>
    </>


}