import React from 'react';
import './Header.css';

function Header() {
	return (
		<header id='header'>
			<div className='header__logo-container'>
				<img src={require('../../assets/Logo.png')} className='logo' />
			</div>

			<div className='header__titles-container'>
				<h1 className='header__title'>VAlorant Agents</h1>
				<h2 className='header__subtitle'>
					Created by{' '}
					<a
						href='https://tiltedveggie.github.io/Alan-Aguilar/'
						target='_blank'
						rel='noreferrer'
						className='header__link'>
						Alan
					</a>
				</h2>
			</div>
		</header>
	);
}

export default Header;
