import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
	<div className='app__header app__wrapper section__padding' id = 'home'>

		<div className='app__wrapper_info'>
			<SubHeading title= 'Persigue el Sabor' />
			<h1 className='app__header-h1'>La Llave para una Deliciosa Cena</h1>
			<p className = 'p__opensans' style={{ margin: '2rem 0'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut fringilla est, eu auctor risus. Sed fringilla sed justo vel porttitor. Etiam vel dolor fermentum, dignissim dui ut, luctus orci. Donec vel massa blandit, molestie nisl non, condimentum urna. </p>
			<button type = 'button' className= 'custom__button'>Explorar Menù</button>
		</div>

		<div className = 'app__wrapper_image'>
			<img src={images.welcome} alt='header_image' className='header__img'/>
		</div>
	
	</div>
);

export default Header;
