import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import AddBookmark from '../AddBookmark/AddBookmark';
import DelCategory from '../DelCategory/DelCategory';
import style from './NewCategory.module.css';

function NewCategory(data) {
    console.log('================')
    console.log(data);

    const [addbookmark, setAddbookmark] = useState(false);
    const [del, setDel] = useState(false);

    let addBookmark = () => {
        setAddbookmark(!addbookmark)
    }

    const delCat = () => {
        setDel(!del)
    }


    const category = useSelector(state => state.newcat.category); // * Take category from redux store
    return (
        <>



            <div className='container'>
                <div className={style.blockList}>
                    <div className={style.blockListHead}>


                    </div>
                    <ul className={style.list}>
                        <div>
                            <div className={style.bookmark} onClick={addBookmark} >
                                <h6 className={style.bookmarkTitle}>Добавить закладку</h6>
                                <p className={style.bookmarkDiscription}>
                                    Нажмите сюда, что бы добавить новую закладку в эту категорию.</p>
                                <div className={style.bookmarkImg}>
                                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M50 87.5C70.7107 87.5 87.5 70.7107 87.5 50C87.5 29.2893 70.7107 12.5 50 12.5C29.2893 12.5 12.5 29.2893 12.5 50C12.5 70.7107 29.2893 87.5 50 87.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M37.5 50H62.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M50 37.5V62.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </ul>

                    {del ?
                        <DelCategory /> : null}

                    {addbookmark ?
                        <AddBookmark /> : null}
                </div>
            </div>


        </>


    )
}

export default NewCategory;