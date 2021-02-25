
import style from './BlockItem.module.css';


function BlockItem() {

    let onSite = () => {
        window.open('https://www.yandex.ru');
    }

    return (
        <>
            <div>
                <div className={style.bookmark} onClick={onSite}>

                    <h6 className={style.bookmarkTitle}>Google</h6>
                    <p className={style.bookmarkDiscription}>Сервис с бесплатными иконками на любой вкус и цвет и есть немного платных. Но норм.</p>
                    <div className={style.bookmarkImg}>
                        <img className={style.logo} src='https://yastatic.net/iconostasis/_/8lFaTHLDzmsEZz-5XaQg9iTWZGE.png'/>
                    </div>

                </div>

            </div>

        </>

    )
}

export default BlockItem;