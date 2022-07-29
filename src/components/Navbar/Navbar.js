import React from 'react'
import "./Navbar.css"
import {NavLink} from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <NavLink className="link" to="/telev">
                    Телевидение
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink className="link" to="/film">
                    Фильмы
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink className="link" to="/serials">
                   Сериалы
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink className="link" to="/cartoon">
                    Мультфильмы
                    </NavLink>
                </li>
                <li className='nav__item'> 
                    <NavLink className="link" to="/catalog">
                    Каталог
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink className="link" to="/library">
                    Библиотека
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink className="link" to="/podpiska">
                    Подписки
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
