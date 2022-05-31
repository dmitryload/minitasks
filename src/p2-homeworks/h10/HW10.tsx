import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./hw10.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import stopwatch from "./Stopwatch.gif"

function HW10() {
    const loading = useSelector<AppStoreType, boolean>(state => state.LOADING.loading)
const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {dispatch(loadingAC(false))}, 2000)
    };

    return (
        <div className={s.homework}>
            <div className={s.title}>Homework 10:</div>

            {loading
                ? (
                    <div><img className={s.stopwatch} src={stopwatch} alt="stopwatch"/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
        </div>
    )
}

export default HW10
