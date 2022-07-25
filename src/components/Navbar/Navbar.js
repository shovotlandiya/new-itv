import React from 'react'
import "./Navbar.css"
import {NavLink} from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <NavLink to="/telev">
                    Телевидение
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to="/film">
                    Фильмы
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to="/serials">
                   Сериалы
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to="/cartoon">
                    Мультфильмы
                    </NavLink>
                </li>
                <li className='nav__item'> 
                    <NavLink to="/catalog">
                    Каталог
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to="/library">
                    Библиотека
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to="/podpiska">
                    Подписки
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
