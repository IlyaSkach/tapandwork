import style from './DelBookmark.module.css'

function DelBookmark() {



    // const dispatch = useDispatch()

    // const delCatC = (e) => {
    //     e.preventDefault()
    //     setActiveWindow(false)
    //     dispatch(delCat(id))
    // }

    return (
        <div className={style.form}>
            <form className={style.AddBookmark}>
                <div className={style.formTitle}>
                    Удаление закладки
                 </div>
                <p className={style.text}>Вы действительно хотите удалить закладку?</p>

                <div className={style.btnGroup}>
                    <button className={style.addBtn} type="submit">Уалить закладку</button>
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
export default DelBookmark;