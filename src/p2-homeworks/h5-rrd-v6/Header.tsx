import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from "./Header.module.css"

function Header() {

    return (
        <div className={s.body}>
            <div className={s.header}>
                <div className={s.header__block}>
                    <nav className={s.menu}>
                        <NavLink className={s.link} to={PATH.PRE_JUNIOR}>Junior</NavLink>
                        <NavLink className={s.link} to={"/middle"}>Middle</NavLink>
                        <NavLink className={s.link} to={"/senior"}>Senior</NavLink>
                    </nav>
                    <span className={s.box}>M</span>
                </div>
            </div>
        </div>
    )
}

export default Header
