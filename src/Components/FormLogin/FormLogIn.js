import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


import style from '../FormLogin/FormLogIn.module.css';


function FormLogIn() {

    const [pass, setPass] = useState('')
    const [value, setValue] = useState('')
    
    let history = useHistory()

    let password = (event) => {
        setValue(event.target.value)
    }

    let adminOn = (event) => {
        console.log(value)
        if (value == '123qwe') {
            console.log('pass true')  
            history.push('/admin');
        }
        else {
            setPass('Неверный пароль. Пароль 123qwe')
            console.log('pass false')
            event.preventDefault();
        }   
    }

    return (
        <div className={style.form}>
            <form className={style.formLog} action="" >
                <div className={style.formTitle}>
                    Авторизация
            </div>
                <input className={style.formInput} type="password" placeholder="пароль" onChange={password} />
                <div className={style.error}>{pass}</div>
                <button className={style.formBtn} type="submit" onClick={adminOn} >Авторизоваться</button>
                <button className={style.formBtnClose} >
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L4 12" stroke="#696969" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4 4L12 12" stroke="#696969" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </form>
        </div>
    )
}
export default FormLogIn;