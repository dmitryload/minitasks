import React from 'react'
import {AffairType} from "./HW2";
import classes from "./Affair.module.css"


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair( props: AffairPropsType) {
    const deleteCallback = (newId: number) => {
        props.deleteAffairCallback(newId)
    }// need to fix
    return (
        <tr className={classes.table}>
            <th>{props.affair.name}</th>
            <th className={classes[props.affair.priority]}>{props.affair.priority}</th>
            <th>
                <button className={classes.btn} onClick={() => deleteCallback(props.affair._id)}>X</button>
            </th>
        </tr>
    )
}

export default Affair
