import React, { useState, createContext } from 'react';
import { useAgent } from '../hooks/useAgent.js';
import { useScrollLock } from '../hooks/useScrollLock.js';

export const PanelContext = createContext();

export function PanelContextProvider({ children }) {
	const [id, setId] = useState();
	const [renderPanel, setRenderPanel] = useState(false);

	const { agent, loading, error } = useAgent(
		'https://valorant-api.com/v1/agents/',
		id
	);

	const { lockScroll, unlockScroll } = useScrollLock();

	function setDataForPanel(agentId) {
		setId(agentId);
		setRenderPanel(true);
		lockScroll();
	}

	function restartDataForPanel() {
		setId();
		setRenderPanel(false);
		unlockScroll();
	}

	return (
		<PanelContext.Provider
			value={{
				agent,
				loading,
				error,
				renderPanel,
				setDataForPanel,
				restartDataForPanel
			}}>
			{children}
		</PanelContext.Provider>
	);
}
