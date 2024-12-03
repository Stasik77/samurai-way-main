import React from 'react';
import s from  "./Profile.module.css"
export const Profile = () => {
    return <>
        <div className={s.contant}>
            <div><img
                src="https://avatars.mds.yandex.net/i?id=39fdd6b2716781294bc9f6f70916b921_l-6484252-images-thumbs&n=13"/>
            </div>
            <div>ava
                <img
                    src="https://avatars.mds.yandex.net/i?id=248b9b95e7205abdc7ee5880210690bb1b0c188d-12516513-images-thumbs&n=13"
                    alt=""/>
            </div>
        </div>
        <div>
            my post
            <div>
                new post
            </div>
            <div className={s.contant}>
            <div className={s.item}>post1</div>
            <div className={s.item} >post2</div>
        </div>
        </div>
    </>


}