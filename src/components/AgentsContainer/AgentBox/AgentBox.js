import React, { useContext } from 'react';
import { PanelContext } from '../../../contexts/Panel.context.js';
import './AgentBox.css';

function AgentBox({ agent }) {
	const { setDataForPanel } = useContext(PanelContext);

	return (
		<div className='agent-box' data-testid='agent-card'>
			<div className='agent-box__content-wrapper'>
				<div className='agent-box__image-wrapper'>
					<img
						src={agent.fullPortrait}
						className='agent-box__image'
						alt={`${agent.displayName} Portrait`}
					/>
				</div>
				<div className='agent-box__text-wrapper'>
					<div className='agent-box__name-wrapper'>
						<p className='agent-box__name' role='agent-name'>
							{agent.displayName}
						</p>
					</div>
					<button
						className='agent-box__button button'
						onClick={() => setDataForPanel(agent.uuid)}>
						<span className='button__inner'>
							<span className='button__slide'></span>
							<span className='button__content' role='agent-button'>
								Read More
							</span>
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default AgentBox;
