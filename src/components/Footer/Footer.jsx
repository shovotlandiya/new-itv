import React from 'react'
import FooterApp from '../FooterApps/FooterApp'
import FooterInfo from '../FooterInfo/FooterInfo'
import FooterSites from '../FooterSites/FooterSites'
import "./Footer.css"


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className='footer__left'>
                    <FooterInfo/>
                </div>
                <div className='footer__center'>
                   <FooterApp/>
                </div>
                <div className='grid__center'>
                    <FooterSites/>

                </div>
            </div>

        </div>
    )
}

export default Footer
