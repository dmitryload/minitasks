import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useEffect} from 'react'
import s from "./SuperDoubleRange.module.css"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: [number, number]) => void
    valueAll: [number, number]
}


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, valueAll,
    }
) => {
    const onChangeCallback1 = (e: ChangeEvent<HTMLInputElement>) => {
        valueAll[0] = +e.currentTarget.value
        return onChangeRange && onChangeRange(valueAll)
    }
    const onChangeCallback2 = (e: ChangeEvent<HTMLInputElement>) => {
        valueAll[1] = +e.currentTarget.value
        return onChangeRange && onChangeRange(valueAll)
    }
    useEffect(() => {
        let minLimitValue = localStorage.getItem('minLimit');
        let maxLimitValue = localStorage.getItem('maxLimit');
        minLimitValue && (valueAll[0] = (+minLimitValue))
        maxLimitValue && (valueAll[1] = (+maxLimitValue))
        return onChangeRange && onChangeRange(valueAll)
    }, [])

    return (
        <div className={s.body}>
            <input type={'range'}
                   value={valueAll[0]}
                   onChange={onChangeCallback1}
                   className={`${s.slider} ${s.min}`}
                   min={0}
                   max={100}>

            </input>
            <input type={'range'}
                   value={valueAll[1]}
                   onChange={onChangeCallback2}
                   className={`${s.slider} ${s.max}`}
                   min={0}
                   max={100}/>
        </div>
    )
}

export default SuperDoubleRange
