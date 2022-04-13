import React from 'react'
import classes from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from "../../../p2-homeworks/h2/HW2";
import HW3 from "../../../p2-homeworks/h3/HW3";

function App() {
    return (
        <div className={classes.app}>
            <div className={classes.title}>React homeworks</div>
            <HW1/>
            <HW2/>
            <HW3/>
        </div>
    )
}

export default App
