
import style from './AddBookmark.module.css'

function AddBookmark() {
    return (
        <div className={style.form}>
            <form className={style.AddBookmark} action="" >
                <div className={style.formTitle}>
                    Новая закладка
                 </div>
                <input className={style.formInputImg} placeholder="Фавикон или лого" />
                <input className={style.formInput} type="url" placeholder="Ссылка URL" />
                <input className={style.formInput} type="text" placeholder="Название" />
                <textarea className={style.formInputText} rows='5' placeholder="Описание ссылки" />
                <select className={style.formInput}>
                    <option value="">Избранное</option>
                    <option value="">Категория 1</option>
                    <option value="">Категория 2</option>
                </select>
                <div className={style.btnGroup}>
                    <button className={style.addBtn}>Добавить закладку</button>
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
export default AddBookmark;