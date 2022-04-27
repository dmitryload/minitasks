import React from 'react'
import AlternativeMessage from "./AlternativeMessage/AlternativeMessage";
import Message from "./Message/Message";
import s from "./HW1.module.css";


const messageData = {
    avatar: 'http://www.somewhere-magazine.com/wp-content/uploads/2020/07/apple-memoji-update-headwear-masks-hairstyles-4.png',
    name: 'Me',
    message: 'Hi, What\'s up?',
    time: '22:00',
}
const alternativeMessageData = {
    avatar: "http://www.somewhere-magazine.com/wp-content/uploads/2020/07/apple-memoji-update-headwear-masks-hairstyles-1.png",
    name: 'Alex',
    message: 'Hey bro! I\'m too tired',
    time: '22:45'
}

/*const nf1 = () => {}

const nf2 = (str: string): string => {
    return  str + 'string1231312312'
}*/

function HW1() {
    return (
        <div className={s.homework}>
            <div className={s.title}>Homework 1:</div>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <AlternativeMessage
                avatar={alternativeMessageData.avatar}
                name={alternativeMessageData.name}
                message={alternativeMessageData.message}
                time={alternativeMessageData.time}
            />
        </div>
    )
}

export default HW1
