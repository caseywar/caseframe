import React from 'react';
import style from './Header.css';

const Header = () => {
    return (
        <nav>
            <ul>
                <li className={style.headerContainer}>
                    <p className={style.caseName}>
                        CASEY WARREN
                    </p>
                    <div className={style.buttonContainer}>
                    <div className={style.buttonBox}>
                        <a className={style.button}
                        href="/"
                        >
                            Home
                        </a>
                    </div>
                    <div className={style.buttonBox}>

                        <a className={style.button}
                        href="/mycode"
                        >
                            My Code
                        </a>
                        </div>
                        <div className={style.buttonBox}>

                        <a className={style.button}
                        href="/resume"
                        >
                            Resume
                        </a>
                        </div>
                        </div>

                </li>
                
            </ul>
        </nav>
    )
}

export default Header
