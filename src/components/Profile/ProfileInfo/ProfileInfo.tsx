import React from 'react';
import s from "./ProfileInfo.module.css"








export const ProfileInfo = () => {
    return (
    <div >
        <div>
            <img
                src="https://avatars.mds.yandex.net/i?id=39fdd6b2716781294bc9f6f70916b921_l-6484252-images-thumbs&n=13"/>
        </div>
        <div className={s.descriptionBlock}>ava + description</div>
    </div>
    )
}
