import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addBookMark } from "../../actions/addCat";
import style from './AddBookmark.module.css'

function AddBookmark({ activeWindow }) {



    const category = useSelector(state => state.newcat.category); // New code
    const dispatch = useDispatch() // New code
    // New code
    const [url, setUrl] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [about, setAbout] = React.useState('');
    const [cat, setCat] = React.useState('Избранное');
    // New code
    const inputHandlerURL = (e) => {
        setUrl(e.target.value)
    }
    const inputHandlerTitle = (e) => {
        setTitle(e.target.value)
    }
    const inputHandlerAbout = (e) => {
        setAbout(e.target.value)
    }
    const formValue = (e) => {
        setCat(e.target.value);
    };
    //
    const addBookmark = (e) => {
        e.preventDefault()
        dispatch(addBookMark(url, title, about, cat))
        activeWindow(false)
    }


    const closeCategoryWindow = (e) => {
        e.preventDefault()
        activeWindow(false)
    }

    //
    return (
        <div className={style.form}>
            <form className={style.AddBookmark} action="" >
                <div className={style.formTitle}>
                    Новая закладка
                 </div>
                <input className={style.formInputImg} placeholder="Фавикон или лого" /> {/**New code  */}
                <input className={style.formInput} value={url} onChange={inputHandlerURL} type="url" placeholder="Ссылка URL" />
                <input className={style.formInput} type="text" value={title} onChange={inputHandlerTitle} placeholder="Название" />
                <textarea className={style.formInputText} value={about} onChange={inputHandlerAbout} rows='5' placeholder="Описание ссылки" />
                <select onChange={formValue}
                    value={cat}
                    className={style.formInput}>
                    {category.map((item) => <option value={item.name} key={item.name}>{item.name}</option>)}
                </select>
                <div className={style.btnGroup}>
                    <button className={style.addBtn} onClick={(e) => addBookmark(e)}>Добавить закладку</button>
                    <button className={style.cancelBtn} onClick={closeCategoryWindow}>Отмена</button>
                </div>
                <button className={style.formBtnClose} onClick={closeCategoryWindow} >
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L4 12" stroke="#696969" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4 4L12 12" stroke="#696969" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </form>
        </div>
    )
}
export default AddBookmark;