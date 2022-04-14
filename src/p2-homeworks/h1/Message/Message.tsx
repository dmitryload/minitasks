import React from 'react'
import classes from "./Message.module.css";

type MessageDataType= {
   avatar: string
    message: string
    name: string
    time: string
}

const Message: React.FC<MessageDataType> = ({avatar, message, name, time}) => {
    return (
        <div className={classes.message}>
            <img className={classes.avatar} src={avatar} alt="avatar"/>
            <div className={classes.angle} />
            <div className={classes.body}>
                <div className={classes.name}>{name}</div>
                <div className={classes.text}>{message}</div>
                <div className={classes.time}>{time}</div>
            </div>
        </div>
    )
}

export default Message
