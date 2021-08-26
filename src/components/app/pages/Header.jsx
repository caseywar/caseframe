import React from 'react'
import style from './Header.css'

const Header = () => {
    return (
        <nav>
            <ul>
                <li className={style.buttonContainer}>
                    <p className={style.caseName}>
                        CASEY WARREN
                    </p>
                    <div className={style.buttonBox}>
                        <a className={style.button}
                        href="/about"
                        >
                            About Me
                        </a>
                    </div>
                    <div className={style.buttonBox}>

                        <a className={style.button}
                        href="/about"
                        >
                            My Code
                        </a>
                        </div>
                        <div className={style.buttonBox}>

                        <a className={style.button}
                        href="/about"
                        >
                            Resume
                        </a>
                        </div>

                </li>
                
            </ul>
        </nav>
    )
}

export default Header
