import React, {KeyboardEvent, useState} from 'react'
import {UserType} from "./HW3";
import s from "./GreetingContainer.module.css";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const error = name ? '' : 'input is required'
    const addUser = (name: string) => {
        if (name.trim() !== "") {
            addUserCallback(name)
            alert(`Hello ${name.trim()} !`)
            setName("")
        }
    }
    const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addUser(name)
        }
    }
    const totalUsers = users.length - 1
    const btnClass = !name ? s.disabled_btn : s.btn
    return (
        <div className={s.greetingBlock}>
            <SuperInputText
                value={name}
                onChangeText={setName}
                onEnter={onKeyHandler}
                error={error}
            />
            <SuperButton
                red
                onClick={() => addUser(name)}
                className={btnClass}> add </SuperButton>
            <span className={s.count}>{totalUsers}</span>
        </div>
    )
}

export default GreetingContainer
