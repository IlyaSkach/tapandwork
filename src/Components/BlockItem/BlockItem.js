
import style from './BlockItem.module.css';


function BlockItem({title, about, img, url}) {

    let onSite = () => {
        window.open(url);
    }

    return (
        <>
            <div>
                <div className={style.bookmark} onClick={onSite}>
                    <h6 className={style.bookmarkTitle}>{title}</h6>
                    <p className={style.bookmarkDiscription}>{about}</p>
                    <div className={style.bookmarkImg}>
                        <img className={style.logo} src={img}/>   
                    </div>
                </div>
            </div>
        </>

    )
}

export default BlockItem;