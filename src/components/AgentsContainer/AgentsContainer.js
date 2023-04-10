import React from 'react';
import { useFetch } from '../../hooks/useFetch.js';
import AgentBox from './AgentBox/AgentBox.js';
import {
	ErrorComponent,
	LoadingComponent
} from '../FetchStatusComponents/FetchStatusComponents.js';
import './AgentsContainer.css';

function AgentsContainer() {
	const { agents, loading, error } = useFetch(
		'https://valorant-api.com/v1/agents'
	);

	return (
		<section id='agents-container'>
			<div className='agents-container__wrapper'>
				{error && <ErrorComponent error={error} />}

				{loading && <LoadingComponent />}

				{agents?.map(agent => {
					return (
						agent.isPlayableCharacter && (
							<AgentBox key={agent.uuid} agent={agent} />
						)
					);
				})}
			</div>
		</section>
	);
}

export default AgentsContainer;
