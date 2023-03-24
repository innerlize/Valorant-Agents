import React from 'react';
import { useFetch } from '../../hooks/useFetch.js';
import AgentBox from './AgentBox/AgentBox.js';

function AgentsContainer() {
	const { agents, loading, error } = useFetch(
		'https://valorant-api.com/v1/agents'
	);

	return (
		<section>
			<div>
				{error && <p>Error: {error.message}</p>}

				{loading && (
					<div>
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
