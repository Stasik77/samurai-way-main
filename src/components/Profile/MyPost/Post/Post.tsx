import React from 'react';
import s from "./Post.module.css"


type PostPropsType = {
    message: string,
    like: number


}
export const Post = (props: PostPropsType) => {
    return <>
        <div className={s.item}>{props.message},<span>like</span>{props.like}</div>
    </>
}