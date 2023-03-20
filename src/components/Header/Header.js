import React from 'react';

function Header() {
	return (
		<header>
			<div>
				<img src={require('../../assets/Logo.png')} />
			</div>

			<div>
				<h1>VAlorant Agents</h1>
				<h2>
					Created by{' '}
					<a
						href='https://tiltedveggie.github.io/Alan-Aguilar/'
						target='_blank'
						rel='noreferrer'>
						Alan
					</a>
				</h2>
			</div>
		</header>
	);
}

export default Header;
