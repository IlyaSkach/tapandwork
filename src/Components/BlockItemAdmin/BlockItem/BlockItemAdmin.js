import React, { useState } from 'react';
import style from './BlockItemAdmin.module.css';
import NewCategory from '../../NewCategory/NewCategory'
import DelBookmark from '../../DelBookmark/DelBookmark';

function BlockItemAdmin({ title, about, img, url }) {

    let onSite = () => {
        window.open(url);
    }

    const [delbookmark, setDelbookmark] = useState(false);

    const delBookm = () => {
        setDelbookmark(!delbookmark)
    }

    return (
        <>
            {
                typeof title == 'string' ? <div>
                    <div className={style.bookmark} onClick={onSite}>
                        <h6 className={style.bookmarkTitle}>{title}</h6>
                        <p className={style.bookmarkDiscription}>{about}</p>
                        <div className={style.bookmarkImg}>
                            <img className={style.logo} src={img} />
                            <button className={style.btnEdition}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.33331 16.6667H6.66665L15.4166 7.91666C15.8587 7.47464 16.107 6.87512 16.107 6.25C16.107 5.62488 15.8587 5.02536 15.4166 4.58333C14.9746 4.1413 14.3751 3.89297 13.75 3.89297C13.1249 3.89297 12.5253 4.1413 12.0833 4.58333L3.33331 13.3333V16.6667Z"
                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M11.25 5.41667L14.5833 8.75" stroke="white" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button className={style.btnClose} onClick={delBookm}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 5L5 15" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M5 5L15 15" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {delbookmark ?
                        <DelBookmark/> : null}
                </div> : <NewCategory />
                
            }
        </>
    )
}

export default BlockItemAdmin;