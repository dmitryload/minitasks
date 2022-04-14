import React from 'react'
import {AffairType} from "./HW2";
import classes from "./Affair.module.css"
import UniversalButtonRemove from "./UniversalBtnRemove";


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: string) => void // need to fix any
}

const Affair:React.FC<AffairPropsType> = ({affair, deleteAffairCallback}) => {

    const deleteCallback = (newId: string) => {
        deleteAffairCallback(newId)
    }// need to fix
    return (
        <tr className={classes.table}>
            <th>{affair.name}</th>
            <th className={classes[affair.priority]}>{affair.priority}</th>
            <th>
                <UniversalButtonRemove name={"x"} callback={deleteCallback} id={affair._id}/>
                {/*<button className={classes.btn} onClick={() => deleteCallback(props.affair._id)}>X</button>*/}
            </th>
        </tr>
    )
}

export default Affair
