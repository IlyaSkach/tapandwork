import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addCat } from '../../actions/addCat'
import style from './AddCategory.module.css'

function AddCategory({ activeWindow }) {

    const [closed, setClosed] = useState(true);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState({ name: '' });
    const [radioInputValue, setRadioInputValue] = useState({ color: '' });


    const valueInputHandler = (e) => {
        setInputValue({ name: e.target.value }) // * Save input value on useState
    }
    const radioInputHandler = (e) => {
        setRadioInputValue({ color: e.target.value }) // * Save radio value on useState
        console.log(e)
    }
    // const formHandler = (event) =>{ 
    //     console.log(event.target.elements);
    //     let data = event.target.elements;
    //     dispatch(addCat(data.title.value, data.color.value));
    //     event.preventDefault(); 
    //     activeWindow(false)
    // };

    // const fixCat = (event) => {
    //     event.preventDefault(); 
    // }

    const addNewCategory = (e) => {
        dispatch(addCat(inputValue.name, radioInputValue.color));
        e.preventDefault()
        activeWindow(false)
    }
    const closeCategoryWindow = (e) => {
        e.preventDefault()
        activeWindow(false)
    }
    return (
        <div className={style.form}>
            <form className={style.AddBookmark} >
                <div className={style.formTitle}>
                    Новая категория
                 </div>
                <input className={style.formInput} type="text" name="title" placeholder="Название категории" onChange={valueInputHandler} />
                <p className={style.text}>Цвет категории:</p>
                <div className={style.coloritem}>
                    <input className={style.colorbox}
                        type="radio"
                        name="color"
                        value="#AB14C4"
                        style={{ backgroundColor: '#AB14C4' }}
                        onChange={radioInputHandler}
                        checked={radioInputValue.color == '#AB14C3'} />
                    <input className={style.colorbox}
                        type="radio"
                        name="color"
                        value="#5236C1"
                        style={{ backgroundColor: '#5236C1' }} 
                        onChange={radioInputHandler}
                        checked={radioInputValue.color == '#5236C1'}/>
                    <input className={style.colorbox}
                        type="radio"
                        name="color"
                        value="#1A7FDB"
                        style={{ backgroundColor: '#1A7FDB' }} 
                        onChange={radioInputHandler}
                        checked={radioInputValue.color == '#1A7FDB'}/>
                    <input className={style.colorbox}
                        type="radio"
                        name="color"
                        value="#00C5AD"
                        style={{ backgroundColor: '#00C5AD' }} 
                        onChange={radioInputHandler}
                        checked={radioInputValue.color == '#00C5AD'}/>
                    <input className={style.colorbox}
                        type="radio"
                        name="color"
                        value="#95D70B"
                        style={{ backgroundColor: '#95D70B' }} 
                        onChange={radioInputHandler}
                        checked={radioInputValue.color == '#95D70B'}/>
                    <input className={style.colorbox}
                        type="radio"
                        name="color"
                        value="#FDD608"
                        style={{ backgroundColor: '#FDD608' }} 
                        onChange={radioInputHandler}
                        checked={radioInputValue.color == '#FDD608'}/>
                    <input className={style.colorbox}
                        type="radio"
                        name="color"
                        value="#FF4062"
                        style={{ backgroundColor: '#FF4062' }} 
                        onChange={radioInputHandler}
                        checked={radioInputValue.color == '#FF4062'}/>
                </div>
                <div className={style.btnGroup}>
                    <button className={style.addBtn} type="submit" onClick={addNewCategory}>Добавить категорию</button>
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
export default AddCategory;