import React, { useState } from 'react';
import style from './FormLogIn.module.css';


function FormLogIn() {

    const [pass, setPass] = useState('')

    let pasref = React.createRef();


    console.log()
    let password = () => {
   
    let p = pasref.current.value;

    if(p == 123){
        console.log('pass true')
    }
    else{
        setPass('Неверный пароль')
        console.log('pass false')
    }
    

        
        
        
    }
    return (
    
        <div className={style.form}>
            <form className={style.formLog} action="" >
                <div className={style.formTitle}>
                    Авторизация
            </div>
                <input className={style.formInput} type="password" placeholder="пароль" ref={pasref} />
                <button className={style.formBtn} type="submit" onClick={password} >Авторизоваться</button>
                <button className={style.formBtnClose} >
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L4 12" stroke="#696969" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4 4L12 12" stroke="#696969" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                {pass}
            </form>
        </div>
    )
}
export default FormLogIn;