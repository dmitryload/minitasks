import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./HW8.module.css";

export type UserType = {
    _id: number,
    name: string,
    age: number
}

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Cat', age: 3},
    {_id: 1, name: 'Alexander', age: 66},
    {_id: 2, name: 'Kolya', age: 16},
    {_id: 3, name: 'Victor', age: 44},
    {_id: 4, name: 'Dmitri', age: 40},
    {_id: 5, name: 'Irina', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople)
    const finalPeople = people.map((p: UserType) => (
        <div className={s.user} key={p._id}>
            <span className={s.user__name}>{p.name}</span>
            <span>{p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const sortOlderThan18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))

    return (
            <div className={s.homework}>
                <div className={s.title}>Homework 8:</div>
            {finalPeople}
            <div className={s.btns}><SuperButton onClick={sortUp}>Sort A-z</SuperButton>
                <SuperButton onClick={sortDown}>Sort Z-a</SuperButton>
            <SuperButton onClick={sortOlderThan18}>Sort 18+</SuperButton></div>
        </div>
    )
}

export default HW8
