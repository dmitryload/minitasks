import React from 'react'
import s from "./AlternativeMessage.module.css";

type AlternativeMessageDataType = {
    avatar: string
    message: string
    name: string
    time: string
}

const AlternativeMessage: React.FC<AlternativeMessageDataType> = ({
                                                                      avatar,
                                                                      message,
                                                                      name,
                                                                      time
                                                                  }) => {
    return (
        <div className={s.alternativeMessage}>
            <img className={s.avatar} src={avatar} alt="avatar"/>
            <div className={s.angle}/>
            <div className={s.body}>
                <div className={s.name}>{name}</div>
                <div className={s.text}>{message}</div>
                <div className={s.time}>{time}</div>
            </div>
        </div>
    )
}

export default AlternativeMessage
