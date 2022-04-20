import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: string) => void
    filter: FilterType
}

const Affairs: React.FC<AffairsPropsType> = ({
                                                 data,
                                                 setFilter,
                                                 deleteAffairCallback,
                                                 filter
                                             }) => {
    const mappedAffairs = data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={deleteAffairCallback}
        />
    ))

    const setBtn = (f: FilterType) => {
        return setFilter(f)
    }
    const setClass = (f: FilterType) => {
        return (filter === f ? s[`active_${f}`] : "")
    }
    return (
        <div>
            <div className={s.btns}>
                <SuperButton className={setClass("all")} onClick={()=>setBtn("all")}>all</SuperButton>
                <SuperButton className={setClass("high")} onClick={()=>setBtn("high")}>high</SuperButton>
                <SuperButton className={setClass("middle")} onClick={()=>setBtn("middle")}>middle</SuperButton>
                <SuperButton className={setClass("low")} onClick={()=>setBtn("low")}>low</SuperButton>
            </div>
            <div className={s.table}>
            {mappedAffairs}
            </div>
        </div>
    )
}

export default Affairs
