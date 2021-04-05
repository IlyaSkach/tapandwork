import React, { useState } from 'react';
import BlockItem from '../BlockItem/BlockItem';
import style from './BlockList.module.css';
// Redux
import { connect } from 'react-redux';
import * as actions from '../../actions/addCat'
import { bindActionCreators } from 'redux'

import YandexMail from '../../img/YandexMail.png';
import Google from '../../img/Google.png';
import GoogleDisk from '../../img/GoogleDisk.png';
import YandexDisk from '../../img/YandexDisk.png';
import Gmail from '../../img/Gmail.png';








function BlockList() {

    const [blocks, setBlocks] = useState([
        {
            title: "Яндекс.Почта",
            about: "Сервис с бесплатными иконками на любой вкус и цвет и есть немного платных. Но норм.",
            img: YandexMail,
            url: 'https://www.yandex.ru'
        },
        {
            title: "Google",
            about: "Сервис с бесплатными иконками на любой вкус и цвет и есть немного платных. Но норм.",
            img: Google,
            url: 'https://www.google.ru'
        },
        {
            title: "Google Диск",
            about: "Сервис с бесплатными иконками на любой вкус и цвет и есть немного платных. Но норм.",
            img: GoogleDisk,
            url: ''
        },
        {
            title: "Яндекс.Диск",
            about: "Сервис с бесплатными иконками на любой вкус и цвет и есть немного платных. Но норм.",
            img: YandexDisk,
            url: ''
        },
        {
            title: "Gmail",
            about: "Сервис с бесплатными иконками на любой вкус и цвет и есть немного платных. Но норм.",
            img: Gmail,
            url: ''
        },
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












