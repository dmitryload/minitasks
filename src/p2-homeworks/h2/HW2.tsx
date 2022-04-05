import React, {useState} from 'react'
import Affairs from './Affairs'
import classes from "./hw2.module.css";

// types
export type AffairPriorityType = 'high' | 'low' | 'middle' // need to fix any
export type AffairType = {
    _id: number,
    name: string,
    priority: AffairPriorityType
} // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [                                             // need to fix any+
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]
// pure helper functions


export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {   // need to fix any+
    if (filter === 'high') {
        return affairs.filter((el) => el.priority === 'high')
    } else if (filter === 'low') {
        return affairs.filter((el) => el.priority === 'low')
    } else if (filter === 'middle') {
        return affairs.filter((el) => el.priority === 'middle')
    } else return affairs
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {            // need to fix any+
    return affairs.filter(el => el._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div className={classes.homework2}>
            <div className={classes.title}>Homework 2:</div>
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
        </div>
    )
}

export default HW2
