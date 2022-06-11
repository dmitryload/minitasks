import React, { useEffect, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from "../h10/hw10.module.css";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const valueAll: [number, number] = [value1, value2]

    const onDoubleChangeRange = (array: Array<number>) => {
        setValue1(array[0])
        setValue2(array[1])
    }
const onChangeRange = (n: number) => setValue1(n)
    useEffect(() => {
            localStorage.setItem('minLimit', JSON.stringify(value1))
            localStorage.setItem('maxLimit', JSON.stringify(value2))
        }, [value1, value2])
    return (
        <div className={s.homework}>
            <div className={s.title}>Homework 11:</div>


            <div>
                <span>{value1}</span>
                <SuperRange value={value1} onChangeRange={onChangeRange}
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange valueAll={valueAll} onChangeRange={onDoubleChangeRange}/>
                <span>{value2}</span>
            </div>
        </div>
    )
}

export default HW11
