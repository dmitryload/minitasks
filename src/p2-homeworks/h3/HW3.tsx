import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import s from "./HW3.module.css"

export type UserType = {
    _id: string
    name: string
}

function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([{ _id: v1(), name: '' }])

    const addUserCallback = (name: string) => {
        setUsers([ ...users, {_id: v1(), name: name}])
    }

    return (
        <div className={s.homework}>
            <div className={s.title}>Homework 3:</div>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
        </div>
    )
}

export default HW3
