import style from './Header.module.css';

import Logbtn from '../Logbtn/Logbtn';


function Header() {

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
                    <div>
                        <div className={style.logbtn}>
                            <Logbtn />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;