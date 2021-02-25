
import BlockItem from '../BlockItem/BlockItem';
import style from './BlockList.module.css';

function BlockList() {


    return (
        <>
            <div className='container'>
                <div className={style.blockList}>
                    <h4 className={style.blockTitle}>Избранное</h4>

                    <ul className={style.list}>
                        <li><BlockItem /></li>
                        <li><BlockItem /></li>
                        <li><BlockItem /></li>
                        <li><BlockItem /></li>
                        <li><BlockItem /></li>
                    </ul>


                </div>
            </div>
        </>

    )
}

export default BlockList;