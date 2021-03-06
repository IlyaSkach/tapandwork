import React, { useState } from 'react';
import BlockItem from '../BlockItem/BlockItem';
import BlockItemAdmin from '../BlockItemAdmin/BlockItem/BlockItemAdmin';
import style from './BlockList.module.css';

function BlockList() {

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
                    <h4 className={style.blockTitle}>
                    Избранное
                    </h4>
                    <ul className={style.list}>
                        {blocks.map((item) => {
                            return <BlockItem title={item.title} about={item.about} img={item.img} url={item.url} />;
                        })}
                    </ul>
                </div>  
            </div>
        </>
    )
}

export default BlockList;