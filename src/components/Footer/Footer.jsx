import React from 'react'
import FooterInfo from '../Footer__info/FooterInfo'
import "./Footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className='footer__left'>
                    <FooterInfo/>
                </div>
                <div className='footer__right'></div>
            </div>

        </div>
    )
}

export default Footer
