import React from 'react';
import "./sidebar.css";
import Logo from "../../assets/headshot-sticker.png"

const Sidebar = () => {
    return (
        <aside className='aside'>
            <a href="#home" className="nav__logo">
                <img src = {Logo} alt = "me"/>
            </a>

            <nav className = "nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className = "nav__item">
                            <a href="#home" className="nav__link">
                                <i className="icon-home"></i>
                            </a>
                        </li>

                        <li className = "nav__item">
                            <a href="#about" className="nav__link">
                                <i className="icon-question"></i>
                            </a>
                        </li>

                        <li className = "nav__item">
                            <a href="#resume" className="nav__link">
                                <i className="icon-doc"></i>
                            </a>
                        </li>

                        <li className = "nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="icon-folder-alt"></i>
                            </a>
                        </li>

                        <li className = "nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="icon-user-follow"></i>
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>

            <div className="nav__footer">
                <span className="copyright">&copy; 2025-2026.</span>
            </div>
        </aside>
    )
}

export default Sidebar