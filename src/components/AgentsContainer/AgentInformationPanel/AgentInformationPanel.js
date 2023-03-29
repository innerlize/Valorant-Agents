import React from 'react';
import { useAgent } from '../../../hooks/useAgent.js';

function AgentInformationPanel({ agentID, renderPanel, restartDataForPanel }) {
	const { agent, loading, error } = useAgent(
		'https://valorant-api.com/v1/agents/',
		agentID
	);

	if (renderPanel)
		return (
			<div>
				{error && (
					<div>
						<p>Error: {error.message}</p>
					</div>
				)}

				{loading && (
					<div>
						<img
							src={require('../../../assets/Tactibear.gif')}
							width='100px'
							alt='Tactibear GIF'
						/>
						<p>Loading...</p>
					</div>
				)}

				{agent && (
					<div role='panel'>
						<div onClick={() => restartDataForPanel()}>X</div>

						<div>
							<img
								src={agent.fullPortrait}
								alt={`${agent.displayName} Portrait`}
								width='300px'
							/>
						</div>

						<div>
							<div>
								<p>&gt; {agent.displayName} &lt;</p>
							</div>

							<div>
								<p>&#x2f;&#x2f; Role</p>
								<div>
									<p>{agent.role.displayName}</p>
									<img
										src={agent.role.displayIcon}
										alt={`${agent.displayName} Role Icon`}
										width='30px'
									/>
								</div>
							</div>

							<div>
								<p>&#x2f;&#x2f; Biography</p>
								<p>{agent.description}</p>
							</div>

							<div>
								<p>&#x2f;&#x2f; Abilities</p>
								<div>
									{agent.abilities?.map(ability => {
										return (
											<div key={ability.displayName} role='agent-ability'>
												<div>
													<p>{ability.displayName}</p>
													<img
														src={ability.displayIcon}
														alt={`${agent.displayName} '${ability.displayName}' Ability Icon`}
														width='50px'
													/>
												</div>

												<p>{ability.description}</p>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		);
}

export default AgentInformationPanel;
