import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch.js';
import { useScrollLock } from '../../hooks/useScrollLock.js';
import AgentBox from './AgentBox/AgentBox.js';
import AgentInformationPanel from './AgentInformationPanel/AgentInformationPanel.js';
import './AgentsContainer.css';

function AgentsContainer() {
	const [agentID, setAgentID] = useState();
	const [renderPanel, setRenderPanel] = useState(false);

	const { agents, loading, error } = useFetch(
		'https://valorant-api.com/v1/agents'
	);

	const { lockScroll, unlockScroll } = useScrollLock();

	function setDataForPanel(id) {
		setAgentID(id);
		setRenderPanel(true);
		lockScroll();
	}

	function restartDataForPanel() {
		setAgentID();
		setRenderPanel(false);
		unlockScroll();
	}

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
							<AgentBox
								key={agent.uuid}
								agent={agent}
								setDataForPanel={setDataForPanel}
							/>
						)
					);
				})}
			</div>

			<AgentInformationPanel
				agentID={agentID}
				renderPanel={renderPanel}
				restartDataForPanel={restartDataForPanel}
			/>
		</section>
	);
}

export default AgentsContainer;
