import React from 'react';
import './AgentBox.css';

function AgentBox({ agent, setDataForPanel }) {
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
