import React, {useCallback} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC, NumType} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'green', 'grey'];

function HW12() {
    const theme = useSelector<AppStoreType, NumType>(state => state.COLOR)
    const dispatch = useDispatch()
    const onChangeCallback = useCallback((x: string) => {
        dispatch(changeThemeC(x))
    }, [dispatch])

    return (
        <>
            <div className={s[theme]}>
            </div>
            <div className={s.homework}>
            <div className={`${s[theme + '-text']} ${s.text}`}>
                homework 12
            </div>
            <SuperSelect value={theme} options={themes} onChangeOption={onChangeCallback}/>
            </div>
        </>
    );
}

export default HW12;
