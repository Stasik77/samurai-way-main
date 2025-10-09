import React from 'react';
import s from "./Profile.module.css"
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

type postsDataType ={
    id:number,
    message:string,
    likesCount:number,
}

export const Profile = (props:any) => {



let postsData = [
    {id: 1, message: "Hi how are you" ,likesCount: 15},
    {id: 2, message: "its my 1 post" ,likesCount: 15 },
    {id: 2, message: "its my 1 post" ,likesCount: 15 },
    {id: 2, message: "its my 1 post" ,likesCount: 15 },
    {id: 2, message: "its my 1 post" ,likesCount: 15 },
    {id: 2, message: "its my 1 post" ,likesCount: 15 },
]



    return (
        <div>
            <div>
                <ProfileInfo/>
            </div>
            <MyPost postsData={props.postsData}/>

        </div>
    )
}
