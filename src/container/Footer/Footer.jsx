import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';

import './Footer.css';


const Footer = () => (
    <div className='app__footer section__padding' id='login'>
        <FooterOverlay />
        <Newsletter />

        <div className='app__footer-links'>

            <div className='app__footer-links_contact'>
                <h1 className="app__footer-headtext">Contacto</h1>
                <p className="p__opensans">Periferico de la Juventud 546, CHIH, Mex.</p>
                <p className="p__opensans">+52 999-999-9999</p>
                <p className="p__opensans">+52 999-999-9999</p>
            </div>

            <div className='app__footer-links_logo'>
                <img src={images.gericht} 
                alt="footer_logo" 
                />
                <p className="p__opensans">
                    &quot;La mejor forma de Disfrutar es dejar que los Profesionales te Sirvan&quot;
                </p>
                <img src={images.spoon} 
                    alt='footer_logo' 
                    className="spoon__img" 
                    style={{ marginTop: 15 }} 
                />

                <div className="app__footer-links_icons">
                    <FiFacebook />
                    <FiTwitter />
                    <FiInstagram />
                </div>
            </div>
            
            <div className='app__footer-links_work'>
                <h1 className="app__footer-headtext">Horario</h1>
                <p className="p__opensans">Lunes-Viernes:</p>
                <p className="p__opensans">08:00 am - 12:00 am</p>
                <p className="p__opensans">Sabado-Domingo:</p>
                <p className="p__opensans">07:00 am - 11:00 pm</p>
            </div>
                        
        </div>
        
        <div className="footer__copyright">
                <p className="p__opensans">2023 Gericht. Todos los derechos reservados.</p>
        </div>
    </div>
    
);

export default Footer;
