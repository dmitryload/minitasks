import React, {useState} from 'react'
import Affairs from './Affairs'
import s from"./HW2.module.css"
import {v1} from "uuid";

export type AffairPriorityType = 'high' | 'low' | 'middle'
export type AffairType = {
    _id: string,
    name: string,
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: AffairType[] = [
    {_id: v1(), name: 'React', priority: 'high'},
    {_id: v1(), name: 'anime', priority: 'low'},
    {_id: v1(), name: 'games', priority: 'low'},
    {_id: v1(), name: 'work', priority: 'high'},
    {_id: v1(), name: 'html & css', priority: 'middle'},
]

export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    if (filter === "all") return affairs
    return affairs.filter(obj => obj.priority === filter)
}
export const deleteAffair = (affairs: AffairType[], _id: string): AffairType[] => {
    return affairs.filter(el => el._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: string) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div className={s.homework}>
            <div className={s.title}>Homework 2:</div>
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}
            />
        </div>
    )
}

export default HW2
