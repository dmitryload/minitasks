import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css";
import UniversalButtonAdd from "./UniversalButtonAdd";

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
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
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
            {mappedAffairs}
            <div className={s.btns}>
                <UniversalButtonAdd name={'all'} callback={setBtn} setClass={setClass}/>
                <UniversalButtonAdd name={'high'} callback={setBtn} setClass={setClass}/>
                <UniversalButtonAdd name={'middle'} callback={setBtn} setClass={setClass}/>
                <UniversalButtonAdd name={'low'} callback={setBtn} setClass={setClass}/>
            </div>
                {/*<button className={ setClass('all') || classes.btn}
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
                </button>*/}

        </div>
    )
}

export default Affairs
