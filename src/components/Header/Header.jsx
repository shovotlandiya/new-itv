import React from 'react'
import { useRef, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import Navbar from '../Navbar/Navbar'
import "./Header.css"

function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>
                    <div className='header__left'>
                        <a href='\'>
                            <svg width="66" height="33" viewBox="0 0 66 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.249 8.251a4.126 4.126 0 100-8.25 4.126 4.126 0 000 8.25zM57.748 10.607L49.5 24.749l-8.252-14.142H33L45.374 33h8.252L66 10.607h-8.252zM0 10.607v8.251a4.117 4.117 0 014.117 4.117v10.02h8.257V22.98A12.39 12.39 0 000 10.607zM36.1 24.748h-7.814a4.117 4.117 0 01-4.117-4.116v-1.765h8.684l-4.567-8.26h-4.117v-6.49h-8.234v16.509A12.39 12.39 0 0028.31 33h12.374l-4.585-8.252z" fill="#52B038"></path></svg>
                        </a>
                        <Navbar />
                    </div>
                    <div className='header__right'>
                        <a className='header__image' href='#link'>
                        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.857 18.343L22.524 22m-.82-10.648a9.352 9.352 0 11-18.704 0 9.352 9.352 0 0118.705 0z" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </a>
                        <a className='header__image' href='#link'>
                        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.728 9.476c0 1.381.365 2.196 1.168 3.134.61.692.804 1.579.804 2.542 0 .961-.316 1.874-.949 2.615a4.99 4.99 0 01-3.19 1.555c-1.729.147-3.458.271-5.21.271a45.81 45.81 0 01-5.21-.271 4.985 4.985 0 01-3.191-1.555A3.977 3.977 0 013 15.152c0-.963.196-1.85.804-2.542.828-.938 1.17-1.752 1.17-3.134v-.469c0-1.85.46-3.06 1.41-4.244C7.798 3.036 10.062 2 12.302 2h.099c2.288 0 4.625 1.086 6.014 2.887.9 1.16 1.314 2.319 1.314 4.12v.469zM9.13 21.866c0-.553.508-.807.979-.915.55-.117 3.9-.117 4.45 0 .47.108.979.362.979.916-.028.527-.337.995-.765 1.292a3.997 3.997 0 01-1.884.804c-.376.049-.746.05-1.109 0a3.98 3.98 0 01-1.885-.805c-.428-.296-.738-.764-.765-1.291z" fill="#fff"></path></svg>
                        </a>
                        <a className='header__image' href='#link'>
                        <svg  width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.534 10.208H2.5M10.094 7.778l2.44 2.43-2.44 2.43" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.444 6.348V5.57a3.07 3.07 0 013.07-3.07h4.07a3.062 3.062 0 013.063 3.063v9.283a3.071 3.071 0 01-3.07 3.07H9.506a3.063 3.063 0 01-3.062-3.062v-.785" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </a>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header
