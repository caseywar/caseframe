import React from 'react'
import style from './Header.css'

const Header = () => {
    return (
        <nav>
            <ul>
                <li className={style.buttonContainer}>
                    <a className={style.button}
                      href="/about"
                    >
                        About Me
                    </a>
                    <a className={style.button}
                      href="/about"
                    >
                        My Code
                    </a>
                    <a className={style.button}
                      href="/about"
                    >
                        Resume
                    </a>
                </li>
                
            </ul>
        </nav>
    )
}

export default Header
