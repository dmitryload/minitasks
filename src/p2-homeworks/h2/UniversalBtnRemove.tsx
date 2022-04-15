import React from 'react';
import s from "./Affairs.module.css";

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
        <button className={s.remove} onClick={onClickHandler}>{name}</button>
    );
};

export default UniversalButtonRemove;