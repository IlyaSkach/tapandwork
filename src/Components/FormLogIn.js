import React, {useState} from 'react';
import style from './FormLogIn.module.css';


function FormLogIn(props) {
    console.log(props)
    let closed = () => {
        console.log('work2')
    }
    return (
        <form className={style.formLog} action="" >
            <div className={style.formTitle}>
                Авторизация
            </div>
            <input className={style.formInput} type="password" placeholder="пароль" />
            <button className={style.formBtn} type="submit" >Авторизоваться</button>
            <button className={style.formBtnClose} onClick={closed}>
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L4 12" stroke="#696969" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4 4L12 12" stroke="#696969" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </button>
        </form>
    )
}
export default FormLogIn;