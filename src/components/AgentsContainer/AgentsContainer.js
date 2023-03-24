import React from 'react';
import { useFetch } from '../../hooks/useFetch.js';
import AgentBox from './AgentBox/AgentBox.js';
import './AgentsContainer.css';

function AgentsContainer() {
	const { agents, loading, error } = useFetch(
		'https://valorant-api.com/v1/agents'
	);

	return (
		<section id='agents-container'>
			<div className='agents-container__wrapper'>
				{error && (
					<p className='agents-container__error'>Error: {error.message}</p>
				)}

				{loading && (
					<div className='agents-container__loading'>
						<img
							src={require('../../assets/Tactibear.gif')}
							alt='Tactibear GIF'
						/>
						<p>Loading...</p>
					</div>
				)}

				{agents?.map(agent => {
					return (
						agent.isPlayableCharacter && (
							<AgentBox key={agent.uuid} {...agent} />
						)
					);
				})}
			</div>
		</section>
	);
}

export default AgentsContainer;
