import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affair.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: string) => void
}
const Affair:React.FC<AffairPropsType> = ({affair, deleteAffairCallback}) => {

    const deleteCallback = (newId: string) => {
        deleteAffairCallback(newId)
    }
    return (
        <div className={s.table}>
            <span>{affair.name}</span>
            <span className={s[affair.priority]}>{affair.priority}</span>
            <span>
                <SuperButton onClick={()=>deleteCallback(affair._id)}>X</SuperButton>
            </span>
        </div>
    )
}

export default Affair
