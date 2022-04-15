import React from 'react';
import s from "./Greeting.module.css";

type ButtonType = {
    callback: (name: string) => void
    name: string
    value: string
}
const Button: React.FC<ButtonType> = ({name, callback, value}) => {
    const btnClass = !value ? s.disabled_btn : s.btn
    const onClickHandler = () => {
        callback(value)
    }
    return (
        <button onClick={onClickHandler} className={btnClass}>{name}</button>
    );
};

export default Button;