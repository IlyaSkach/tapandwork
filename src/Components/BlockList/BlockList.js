import React, {useState} from 'react';
import BlockItem from '../BlockItem/BlockItem';
import BlockItemAdmin from '../BlockItemAdmin/BlockItem/BlockItemAdmin';
import style from './BlockList.module.css';
// Redux
import { connect } from 'react-redux';
import * as actions from '../../actions/addCat'
import { bindActionCreators } from 'redux'






function BlockList () {

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



// return (
    //     <>
    //         {
    //             initialState.map((item) => {
    //                 console.log('++++++++++++')
    //                 console.log(item)
    //                 console.log('++++++++++++')
    //             })
    //         }
    //     </>
    // )



// const mapStateToProps = (state) => {
    
//     console.log(state)

//     return {
//         initialState: state.block.category
//     };
// }


// const mapDispatchToProps = (dispatch) => {
//     const {TEST_TEST} = bindActionCreators(actions, dispatch)
//       return{
  
//       }
//   }

// export default connect(mapStateToProps)(BlockList);




// import React from "react";
// import { connect } from "react-redux";
// const App = ({initState}) => {
//     return (
//         <div>
//             {initState.map((item)=>{
//                 console.log(item)
//             })}
//         </div>
//     );
// };
// const mapStateToProps = (state) => {

//     console.log(state)
//     return {
//         initState: state.block.category
//     };
// };

// export default connect(mapStateToProps)(App);











 