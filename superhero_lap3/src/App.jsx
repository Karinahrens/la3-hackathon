
import './App.css'
import {Routes, Route} from 'react-router-dom'
import React from 'react';
import * as Pages from './pages'
import Header from './components/Header';
function App(){
    return (
        <>
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route index element={<Pages.HomePage />}/>
                    {/* <Route path="/" element={<Pages./>}/>
                    <Route path="/" element={<Pages./>}/>
                    <Route path="/" element={<Pages./>}/> */}
                </Route>
            </Routes>
        </>
    )
}

export default App
