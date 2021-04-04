import { useSelector, useDispatch } from 'react-redux';
import { delCat } from '../../actions/addCat';


import style from './DelCategory.module.css'

function DelCategory() {


    const category = useSelector(state => state.newcat.category); // * Take category from redux store
    console.log(category)
    const dispatch = useDispatch()

    const DelCategory = (id) => {
        dispatch(delCat(id))
    }

    return (
        <div className={style.form}>
            <form className={style.AddBookmark}>
                <div className={style.formTitle}>
                    Удаление категории
                 </div>
                <p className={style.text}>Вы уверенны, что хотите удалить эту категорию?
Все закладки из этой категории также будут удалены</p>

                <div className={style.btnGroup}>
                    {/* <button className={style.addBtn} type="submit" onClick={() => DelCategory(objectCategory.id)}>Уалить категорию</button> */}
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
export default DelCategory;