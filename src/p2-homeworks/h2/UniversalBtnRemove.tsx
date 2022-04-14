import React from 'react';
import {FilterType} from "./HW2";
import classes from "./Affairs.module.css";

type ButtonType = {
    callback: (id: string) => void
    name: "x"
    id: string
}
const UniversalButtonRemove: React.FC<ButtonType> = ({callback, name, id}) => {
    const onClickHandler = () => {
        callback(id)
    }
    return (
        <button className={classes.remove} onClick={onClickHandler}>{name}</button>
    );
};

export default UniversalButtonRemove;