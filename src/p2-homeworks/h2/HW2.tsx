import React, {useState} from 'react'
import Affairs from './Affairs'
import classes from "../../p1-main/m1-ui/u1-app/App.module.css"
import {v1} from "uuid";


// types
export type AffairPriorityType = 'high' | 'low' | 'middle' // need to fix any
export type AffairType = {
    _id: string,
    name: string,
    priority: AffairPriorityType
} // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [                                             // need to fix any+
    {_id: v1(), name: 'React', priority: 'high'},
    {_id: v1(), name: 'anime', priority: 'low'},
    {_id: v1(), name: 'games', priority: 'low'},
    {_id: v1(), name: 'work', priority: 'high'},
    {_id: v1(), name: 'html & css', priority: 'middle'},
]
// pure helper functions


export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {   // need to fix any+any
   /* if (filter === 'high') {
        return affairs.filter((el) => el.priority === "high")
    } else if (filter === 'low') {
        return affairs.filter((el) => el.priority === 'low')
    } else if (filter === 'middle') {
        return affairs.filter((el) => el.priority === 'middle')
    } else return affairs*/
    return affairs.filter(obj => obj.priority == filter)
}
export const deleteAffair = (affairs: AffairType[], _id: string): AffairType[] => {            // need to fix any+
    return affairs.filter(el => el._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: string) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div className={classes.homework}>
            <div className={classes.title2}>Homework 2:</div>
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
