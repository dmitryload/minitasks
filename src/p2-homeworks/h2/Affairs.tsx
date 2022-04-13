import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import classes from "./Affairs.module.css";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setBtn = (f: FilterType) => {
        return props.setFilter(f)
    }
    const setClass = (f: FilterType) => {
        return (props.filter === f ? classes[`active_${f}`] : "")
    }
    return (
        <div>

            {mappedAffairs}
            <div className={classes.btns}>
                <button className={ setClass('all') || classes.btn}
                        onClick={() => setBtn('all')}>All
                </button>
                <button className={setClass('high') || classes.btn}
                        onClick={() => setBtn('high')}>High
                </button>
                <button className={setClass('middle') || classes.btn}
                        onClick={() => setBtn('middle')}>Middle
                </button>
                <button className={setClass('low') || classes.btn}
                        onClick={() => setBtn('low')}>Low
                </button>
            </div>
        </div>
    )
}

export default Affairs
