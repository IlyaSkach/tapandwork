import React, { useState } from 'react';
import DelCategory from '../DelCategory/DelCategory';
import BlockItemAdmin from '../BlockItemAdmin/BlockItem/BlockItemAdmin';

import style from './BlockListAdmin.module.css';
import { useSelector, useDispatch } from 'react-redux';




function BlockListAdmin() {

    const category = useSelector(state => state.newcat.category); 
    console.log(category)


    const [id, setId] = useState(null);
    const [del, setDel] = useState(false);
    const takeId = (id) => {
        console.log(id);
        setId(id)
        setDel(!del)
    }

    return (
        <>
            <div className='container'>
                {category.map((objectCategory) => {
                    return (
                        <div className={style.blockList} key={Math.random().toString()} style={{ borderTop: `3px solid ${objectCategory.color}` }}>
                            <div className={style.blockListHead}>
                                <h4 className={style.blockTitle}>
                                    {objectCategory.name}
                                </h4>
                                <button className={style.btnDown}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="white" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <button className={style.btnUp}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 15L12 9L18 15" stroke="white" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                {/* тут было перенес в DelCat*/}
                                <button className={style.btnClose} onClick={() => takeId(objectCategory.id)}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M6 6L18 18" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <ul className={style.list}>
                                {objectCategory.list.map((item) => {
                                    return <BlockItemAdmin title={item.title} about={item.about} img={item.imgLink}
                                        url={item.url} key={Math.random().toString()} />;//? replace key;
                                })}
                            </ul>
                            {del ?
                                <DelCategory id={id} setActiveWindow={setDel} /> : null}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default BlockListAdmin;