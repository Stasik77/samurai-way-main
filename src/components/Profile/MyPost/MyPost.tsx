import React from 'react';
import s from "./MyPost.module.css"
import {Post} from "./Post/Post";

let postsData = [
    {id: 1, message: "Hi how are you" ,likesCount: 15},
    {id: 2, message: "its my 1 post" ,likesCount: 15 },
    {id: 2, message: "its my 1 post" ,likesCount: 15 },
    {id: 2, message: "its my 1 post" ,likesCount: 15 },
    {id: 2, message: "its my 1 post" ,likesCount: 15 },
    {id: 2, message: "its my 1 post" ,likesCount: 15 },
 ]




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

            <Post message={postsData[0].message} like={postsData[0].likesCount} />
            <Post message={postsData[0].message} like={postsData[1].likesCount} />
         </div>
    </div>
    </>


}