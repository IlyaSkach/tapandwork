import React, { useState } from 'react';
import AddBookmark from '../AddBookmark/AddBookmark';
import AddCategory from '../AddCategory/AddCategory';

import style from './HeaderAdmin.module.css';
function HeaderAdmin() {
    const [show, setSow] = useState(false);
    const [addbookmark, setAddbookmark] = useState(false);
    const [addcategory, setAddcategory] = useState(false);
    let toggle = () => {
        setSow(!show)
    }
    let addBookmark = () => {
        setAddbookmark(!addbookmark)
    }
    let addCategory = () => {
        setAddcategory(!addcategory)
    }
    return (
        <header>
            <div className='container'>
                <div className={style.headerInner}>
                    <div className={style.headerLeft}>
                        <img className={style.logoImg} src=".\images\logo.svg" alt="logo" />
                        <div className={style.tagline}>
                            Жми, чтобы творить
                        </div>
                    </div>
                    {show ?
                        <div className={style.adminBtn}>
                            <button className={style.headerBtn} onClick={addBookmark}>Добавить закладку</button>
                            <button className={style.headerBtn} onClick={addCategory}>Добавить категорию</button>
                        </div> : null
                    }
                    {addbookmark ?
                        <AddBookmark /> : null}

                    {addcategory ? 
                        <AddCategory /> : null}

                    <div>
                        <div className={style.logbtn}>
                            <input onClick={toggle} type="checkbox" id="switch" /><label for="switch">Toggle</label>
                            <div className={style.headerText}>Панель управления</div>
                            <button className={style.login}>
                                <svg className={style.img} width="24" height="24" viewBox="0 0 24 24" fill="rgba(82, 54, 193, 1)" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.94447 6.66627C8.94447 6.65435 8.94845 6.64242 8.94845 6.63447C9.07966 3.78369 11.1034 3.47754 11.9702 3.47754H11.9861C11.994 3.47754 12.006 3.47754 12.0179 3.47754C13.0914 3.50139 14.9164 3.93875 15.0396 6.63447C15.0396 6.64639 15.0396 6.65832 15.0436 6.66627C15.0476 6.69411 15.3259 9.39777 14.0616 10.8212C13.5606 11.3858 12.8926 11.6641 12.0139 11.672C12.006 11.672 12.002 11.672 11.994 11.672C11.9861 11.672 11.9821 11.672 11.9742 11.672C11.0995 11.6641 10.4275 11.3858 9.93052 10.8212C8.67013 9.40572 8.9405 6.69013 8.94447 6.66627Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.5603 13.073C8.40823 13.1644 8.21911 13.2731 8.00001 13.3893C7.4021 13.7065 6.58094 14.0793 5.68023 14.3079C5.66432 14.3119 5.65239 14.3159 5.64047 14.3199C3.91489 14.9123 3.8632 16.7532 3.83935 17.5364C3.83935 17.5722 3.83935 17.604 3.83537 17.6358C3.83537 17.6398 3.83537 17.6438 3.83537 17.6478C3.8314 17.8545 3.82742 18.9161 4.03815 19.4489C4.07791 19.5523 4.14947 19.6397 4.2449 19.6994C4.36418 19.7789 7.22291 21.5999 12.006 21.5999C16.7891 21.5999 19.6478 19.7749 19.7671 19.6994C19.8586 19.6397 19.9341 19.5523 19.9739 19.4489C20.1727 18.9201 20.1687 17.8585 20.1647 17.6517C20.1647 17.6478 20.1647 17.6438 20.1647 17.6398C20.1647 17.608 20.1607 17.5762 20.1607 17.5404C20.1369 16.7532 20.0852 14.9123 18.3596 14.3238C18.3477 14.3199 18.3318 14.3159 18.3199 14.3119C17.4194 14.0823 16.5951 13.7073 15.9956 13.3893C15.7924 13.2816 15.6151 13.1804 15.4694 13.0937" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default HeaderAdmin;