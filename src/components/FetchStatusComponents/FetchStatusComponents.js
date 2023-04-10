import React from 'react';
import './FetchStatusComponents.css';

export function ErrorComponent({ error }) {
	return (
		<div className='status__cont' role='loading_elem'>
			<img
				src={require('../../assets/Error.png')}
				alt='Error'
				className='status__asset'
			/>

			{error.response && (
				<p className='status__text error-code'>
					Error Code: {error.response.status}
				</p>
			)}

			<p className='status__text'>{error.message}</p>
		</div>
	);
}

export function LoadingComponent() {
	return (
		<div className='status__cont' role='error_elem'>
			<img
				src={require('../../assets/Tactibear.gif')}
				alt='Tactibear GIF'
				className='status__asset'
			/>

			<p className='status__text'>Loading...</p>
		</div>
	);
}
