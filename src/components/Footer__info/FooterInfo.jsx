import React from 'react'
import { NavLink } from "react-router-dom"
import "./FooterInfo.css"

function FooterInfo() {
    return (
        <div className='footer__info'>
            <div className='footer__inner__left'>
                <h3>О нас</h3>
                <ul className="footer__list">
                    <li className="footer__item">
                        <NavLink className="footer__link" to="contact">Contacts</NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink className="footer__link" to="poddejka">Poddejka</NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink className="footer__link" to="podpiski">Podpiski</NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink className="footer__link" to="postner">Partnor</NavLink>
                    </li>
                </ul>

            </div>
            <div className="footer__inner__right">
                <h3>Catalog</h3>

                <div className="footer__flex">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <NavLink className="footer__link" to="telev">Телевидение</NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink className="footer__link" to="film">Фильм</NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink className="footer__link" to="serials">Сериалы</NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink className="footer__link" to="cartoon">Мультфильмы</NavLink>
                        </li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <NavLink className="footer__link" to="anime">Аниме</NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink className="footer__link" to="uzvideo">Уз Видео</NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink className="footer__link" to="radio">Radio</NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink className="footer__link" to="pryamoy">Прямой эфир</NavLink>
                        </li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <NavLink className="footer__link" to="muslims">Муслим</NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink className="footer__link" to="videolessons">Видеоуроки</NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink className="footer__link" to="info">Подписки </NavLink>
                        </li>

                    </ul>
                </div>
            </div>


        </div>

    )
}

export default FooterInfo
