import React from 'react';
import {FilterType} from "./HW2";
import classes from "./Affairs.module.css";

type ButtonType = {
    callback: (f: FilterType) => void
    name: FilterType
    setClass: (f: FilterType) => string
}
const UniversalButtonAdd: React.FC<ButtonType> = ({callback, name, setClass}) => {
    const onClickHandler = () => {
        callback(name)
    }
    return (
        <button className={setClass(name) || classes.btn} onClick={onClickHandler}>{name}</button>
    );
};

export default UniversalButtonAdd;