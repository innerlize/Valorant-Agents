import React from 'react';
import './AgentBox.css';

function AgentBox(agent) {
	return (
		<div data-testid='agent-card'>
			<div>
				<div>
					<img src={agent.fullPortrait} alt={`${agent.displayName} Portrait`} />
				</div>
				<div>
					<div>
						<p role='agent-name'>{agent.displayName}</p>
					</div>
					<button>
						<span>
							<span></span>
							<span role='agent-button'>Read More</span>
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default AgentBox;
