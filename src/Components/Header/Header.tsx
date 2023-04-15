import './header.css';
import React, { useState } from 'react';
const link = ['Clothes', 'Sneakers', 'Bags', 'Accessorize'];
const Fade = require('react-reveal/Fade');
export const Header = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu visible")
        } else {
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <header className="header">
            <div className="header__container">
                <Fade top>
                    <div className="header__logo-block">
                        <a href="/" className="header__logo" data-aos="fade-down">LANDING</a>
                    </div>
                </Fade>

                <nav className={"nav__menu menu " + menu_class}>
                    <ul className="menu__list">
                        {link.map((link, index) => (
                            <Fade top key={index}>
                                <li className="menu__item">
                                    <a href="" className="menu__link">{link}</a>
                                </li>
                            </Fade >

                        ))}
                    </ul>
                </nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
                <Fade top>
                    <div className="header__buy-link">
                        <a href="/" className="link__buy">Buy</a>
                    </div>
                </Fade>
            </div>
        </header>
    )
}