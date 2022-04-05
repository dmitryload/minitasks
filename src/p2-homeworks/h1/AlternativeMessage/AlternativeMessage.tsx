import React from 'react'
import classes from "./AlternativeMessage.module.css";

type AlternativeMessageDataType= {
    avatar: string
    message: string
    name: string
    time: string
}

function AlternativeMessage(props: AlternativeMessageDataType) {
    return (
        <div className={classes.alternativeMessage}>
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

export default AlternativeMessage
