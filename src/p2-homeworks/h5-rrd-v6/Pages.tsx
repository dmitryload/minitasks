import React from 'react'
import {Route, Routes, Navigate } from 'react-router-dom'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    MIDDLE: '/middle',
    SENIOR: '/senior'
}

function Pages() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.MIDDLE} element={<h1>Middle</h1>}/>
                <Route path={PATH.SENIOR} element={<h1>Senior</h1>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Pages
