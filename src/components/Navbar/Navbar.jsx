import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import './Navbar.css';
import images from '../../constants/images';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.gericht} alt="app__logo" />
            </div>
            <ul className="app__navbar_links">
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#about">Nosotros</a></li>
                <li className="p__opensans"><a href="#menu">Menu</a></li>
                <li className="p__opensans"><a href="#awards">Premios</a></li>
                <li className="p__opensans"><a href="#contact">Contacto</a></li>
            </ul>
            <div className="app__navbar-login">
                <a href='#login' className='p__opensans'>LogIn / Registro</a>
                <div />
                <a href='/' className='p__opensans'>Reserva</a>
            </div>

            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>

                {toggleMenu && (
                <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                    <MdOutlineRestaurantMenu color='#fff' className='overlay_close' fontSize={27} onClick={() => setToggleMenu(false)}/>
                    <ul className="app__navbar-smallscreen_links">
                        <li className="p__opensans"><a href="#home">Home</a></li>
                        <li className="p__opensans"><a href="#about">Nosotros</a></li>
                        <li className="p__opensans"><a href="#menu">Menu</a></li>
                        <li className="p__opensans"><a href="#awards">Premios</a></li>
                        <li className="p__opensans"><a href="#contact">Contacto</a></li>
                    </ul>
                </div>
                )}

            </div>
        </nav>
    );
}
export default Navbar;
