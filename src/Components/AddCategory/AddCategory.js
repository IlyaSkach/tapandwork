
import style from './AddCategory.module.css'

function AddCategory() {
    return (
        <div className={style.form}>
            <form className={style.AddBookmark} action="" >
                <div className={style.formTitle}>
                    Новая категория
                 </div>
                <input className={style.formInput} type="text" placeholder="Название категории" />
                <p>Цвет категории:</p>
                <div className={style.coloritem}>
                    <input className={style.colorbox} type="radio" value="#00C5AD" />
                    <input className={style.colorbox} type="radio" value="blue" />
                    <input className={style.colorbox} type="radio" value="blue" />
                    <input className={style.colorbox} type="radio" value="gray" />
                    <input className={style.colorbox} type="radio" value="blue" />
                    <input className={style.colorbox} type="radio" value="blue" />
                    <input className={style.colorbox} type="radio" value="black" />
                </div>
                <div className={style.btnGroup}>
                    <button className={style.addBtn}>Добавить категорию</button>
                    <button className={style.cancelBtn}>Отмена</button>
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