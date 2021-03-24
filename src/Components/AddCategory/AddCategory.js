import {useState} from 'react'
import {useDispatch} from 'react-redux';
import {addCat} from '../../actions/addCat'
import style from './AddCategory.module.css'

function AddCategory({activeWindow}) {

    const [closed, setClosed] = useState(true);
    const dispatch = useDispatch();
    const formHandler = (event) =>{ 
        console.log(event.target.elements);
        let data = event.target.elements;
        dispatch(addCat(data.title.value, data.color.value));
        event.preventDefault(); 
        activeWindow(false)
    };

    const fixCat = (event) => {
        event.preventDefault(); 
    }
    

    return (
        <div className={style.form}>
            <form className={style.AddBookmark} onSubmit={formHandler} >
                <div className={style.formTitle}>
                    Новая категория
                 </div>
                <input className={style.formInput} type="text" name="title" placeholder="Название категории" />
                <p className={style.text}>Цвет категории:</p>
                <div className={style.coloritem}>
                    <input className={style.colorbox} type="radio" name="color" value="#AB14C4" style={{backgroundColor: '#AB14C4'}}/>
                    <input className={style.colorbox} type="radio" name="color" value="#5236C1" style={{backgroundColor: '#5236C1'}}/>
                    <input className={style.colorbox} type="radio" name="color" value="#1A7FDB" style={{backgroundColor: '#1A7FDB'}}/>
                    <input className={style.colorbox} type="radio" name="color" value="#00C5AD" style={{backgroundColor: '#00C5AD'}}/>
                    <input className={style.colorbox} type="radio" name="color" value="#95D70B" style={{backgroundColor: '#95D70B'}}/>
                    <input className={style.colorbox} type="radio" name="color" value="#FDD608" style={{backgroundColor: '#FDD608'}}/>
                    <input className={style.colorbox} type="radio" name="color" value="#FF4062" style={{backgroundColor: '#FF4062'}}/>
                </div>
                <div className={style.btnGroup}>
                    <button className={style.addBtn} type="submit" onClick={fixCat}>Добавить категорию</button>
                    <button className={style.cancelBtn} >Отмена</button>
                </div>
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
export default AddCategory;