import React from 'react';
import s from "./Profile.module.css"
import {MyPost} from "./MyPost/MyPost";
export const Profile = () => {
    return <div >
        <div>
            <img
                src="https://avatars.mds.yandex.net/i?id=39fdd6b2716781294bc9f6f70916b921_l-6484252-images-thumbs&n=13"/>
        </div>
        <div>ava + description</div>
        <MyPost/>
    </div>
}
