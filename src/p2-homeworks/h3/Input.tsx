import React, {ChangeEvent} from 'react';
import s from "./Greeting.module.css";

type InputType = {
    callback: (e: ChangeEvent<HTMLInputElement>) => void
    value: string
    error: " " | null
}
const Input: React.FC<InputType> = ({callback, value, error}) => {
    const inputClass = error ? s.error : ""
    return (<>
            <input value={value} onChange={callback} className={inputClass || s.input}/>
            <span>{error}</span>
        </>
    );
};

export default Input;