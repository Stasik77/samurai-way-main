import React from 'react';
import s from "./MyPost.module.css"
import {Post} from "./Post/Post";

type postsDataType ={
    id:number,
    message:string,
    likesCount:number,
}

export const MyPost = (props:any) => {

    //
    // let postsData = [
    //     {id: 1, message: "Hi how are you" ,likesCount: 15},
    //     {id: 2, message: "its my 1 post" ,likesCount: 15 },
    //     {id: 2, message: "its my 1 post" ,likesCount: 15 },
    //     {id: 2, message: "its my 1 post" ,likesCount: 15 },
    //     {id: 2, message: "its my 1 post" ,likesCount: 15 },
    //     {id: 2, message: "its my 1 post" ,likesCount: 15 },
    // ]


    let postElement =  props.postsData.map((p: { message: any; likesCount: any; }) =><Post message={p.message} like={p.likesCount} /> )

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
                {postElement}

         </div>
    </div>
    </>


}