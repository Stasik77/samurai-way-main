import React from 'react';
import s from "./MyPost.module.css"
import {Post} from "./Post/Post";

export const MyPost = () => {
    return <>
        <div className={s.postBlock}>
            <h3> my post</h3>
            <div>
                new post
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={s.contant}>
            <Post message="Hi how are you" like={15}/>
            <Post message="its my 1 post" like={15}/>
            <Post message="its my 1 post" like={15}/>
        </div>
    </div>
    </>


}