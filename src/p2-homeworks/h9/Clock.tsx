import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {

    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)
    const stop = () => {
        setDate(new Date())
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }


    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }
    const data = date.toLocaleDateString()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    let colors = ['#E0BBE4', '#FFDFD3', '#D5E2EF', '#E7F8D8', '#B2AA9B', '#CEB493', '#C69EBC', '#999ACF'];

    function randomColor(colors: Array<string>) {
        let index = Math.floor(Math.random() * colors.length);
        return colors[index];
    }

    const colorStyle1 = {
        backgroundColor: randomColor(colors),
        marginRight: "10px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100px",
        width: "100px",
        borderRadius: "50%"
    }
    const colorStyle2 = {
        backgroundColor: randomColor(colors),
        marginRight: "10px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100px",
        width: "100px",
        borderRadius: "50%"
    }
    const colorStyle3 = {
        backgroundColor: randomColor(colors),
        marginRight: "10px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100px",
        width: "100px",
        borderRadius: "50%"
    }
    const stringTime = <>
        <span style={colorStyle1}>{hours} hours</span>
        <span style={colorStyle2}>{minutes} minutes</span>
        <span style={colorStyle3}>{seconds} seconds</span>
    </>// fix with date
    const stringDate = <div className={s.date}>
        <span style={colorStyle2}>{data}</span>
    </div>


    return (
        <div className={s.counter_time}>
            <div className={s.circles}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}
            </div>
            <div className={s.btns}>
            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton red onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
