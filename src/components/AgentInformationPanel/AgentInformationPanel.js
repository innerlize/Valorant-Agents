import React, { useContext } from 'react';
import { PanelContext } from '../../contexts/Panel.context.js';
import {
	ErrorComponent,
	LoadingComponent
} from '../FetchStatusComponents/FetchStatusComponents.js';
import './AgentInformationPanel.css';

function AgentInformationPanel() {
	const { agent, loading, error, renderPanel, restartDataForPanel } =
		useContext(PanelContext);

	if (renderPanel)
		return (
			<div className='panel'>
				<div className='panel__btn-close' onClick={() => restartDataForPanel()}>
					X
				</div>

				{error && <ErrorComponent error={error} />}

				{loading && <LoadingComponent />}

				{agent && (
					<div className='panel__content-cont' role='panel'>
						<div className='panel__port-cont'>
							<img
								src={agent.fullPortrait}
								alt={`${agent.displayName} Portrait`}
								className='panel__port'
							/>
						</div>

						<div className='panel__inf inf'>
							<p className='inf__name'>&gt; {agent.displayName} &lt;</p>

							<div>
								<p className='inf__title'>&#x2f;&#x2f; Role</p>
								<div className='inf__wrapper'>
									<p className='inf__role'>{agent.role.displayName}</p>
									<img
										src={agent.role.displayIcon}
										alt={`${agent.displayName} Role Icon`}
										className='inf__role-icon'
									/>
								</div>
							</div>

							<div>
								<p className='inf__title'>&#x2f;&#x2f; Biography</p>
								<p className='inf__desc'>{agent.description}</p>
							</div>

							<div>
								<p className='inf__title'>&#x2f;&#x2f; Abilities</p>
								<div className='inf_ablties-wrapper'>
									{agent.abilities?.map(ability => {
										if (ability.slot !== 'Passive')
											return (
												<div key={ability.displayName} role='agent-ability'>
													<div className='inf__wrapper ablty_wrapper'>
														<p className='inf__ablty-name'>
															{ability.displayName}
														</p>
														<img
															src={ability.displayIcon}
															alt={`${agent.displayName} '${ability.displayName}' Ability Icon`}
															className='inf__ablty-icon'
														/>
													</div>

													<p className='inf__desc'>{ability.description}</p>
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
