import React from 'react'
import classes from "./Message.module.css";

type MessageDataType= {
   avatar: string
    message: string
    name: string
    time: string
}

function Message(props: MessageDataType) {
    return (
        <div className={classes.message}>
            <img className={classes.avatar} src={props.avatar} alt="avatar"/>
            <div className={classes.angle} />
            <div className={classes.body}>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.text}>{props.message}</div>
                <div className={classes.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
