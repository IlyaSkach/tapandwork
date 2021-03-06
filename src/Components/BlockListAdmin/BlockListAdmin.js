import React, { useState } from 'react';
import BlockItem from '../BlockItem/BlockItem';
import BlockItemAdmin from '../BlockItemAdmin/BlockItem/BlockItemAdmin';
import style from './BlockListAdmin.module.css';

function BlockListAdmin() {

    const [blocks, setBlocks] = useState([
        { title: "Яндекс.Почта", about: "Сервис с бесплатными иконками на любой вкус и цвет и есть немного платных. Но норм.", img: 'https://www.google.com/s2/favicons?domain=https://mail.yandex.ru/', url: 'https://www.yandex.ru' },
        { title: "Google", about: "Сервис с бесплатными иконками на любой вкус и цвет и есть немного платных. Но норм.", img: 'https://www.google.com/s2/favicons?domain=google.com', url: 'https://www.google.ru' },
        { title: "Google Диск", about: "Сервис с бесплатными иконками на любой вкус и цвет и есть немного платных. Но норм.", img: 'https://www.google.com/s2/favicons?domain=google.com/intl/ru_tj/drive/', url: '' },
        { title: "Яндекс.Диск", about: "Сервис с бесплатными иконками на любой вкус и цвет и есть немного платных. Но норм.", img: 'https://www.google.com/s2/favicons?domain=https://disk.yandex.ru/client/disk', url: '' },
        { title: "Gmail", about: "Сервис с бесплатными иконками на любой вкус и цвет и есть немного платных. Но норм.", img: 'https://www.google.com/s2/favicons?domain=https://www.google.com/intl/ru/gmail/about/', url: '' },
    ]);

    return (
        <>
            <div className='container'>
                <div className={style.blockList}>
                    <div className={style.blockListHead}>
                        <h4 className={style.blockTitle}>
                            Избранное
                        </h4>
                        <button className={style.btnDown}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </button>
                        <button className={style.btnUp}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 15L12 9L18 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button className={style.btnClose}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6 6L18 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <ul className={style.list}>
                        {blocks.map((item) => {
                            return <BlockItemAdmin title={item.title} about={item.about} img={item.img} url={item.url} />;
                        })}
                    </ul>
                </div>
            </div>
        </>

    )
}

export default BlockListAdmin;