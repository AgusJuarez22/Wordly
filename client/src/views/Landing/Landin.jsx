import style from './Landing.module.css'
import React from 'react'
import { useHistory } from "react-router-dom";
const Landing = () =>{
    const history = useHistory()
    const goToHomeHandler = () =>{
        history.push('/home')
    }
    return(
        <div className={style.landing}>
         <h1 className={style.title}>Welcome to my APP</h1>
         <button className={style.button} onClick={goToHomeHandler}>Home Page</button>
         </div>
    )
}

export default Landing
