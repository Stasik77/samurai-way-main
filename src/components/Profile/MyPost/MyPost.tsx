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
            <Post/>

        </div>
    </>


}