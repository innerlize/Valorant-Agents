import React from 'react';
import Header from './components/Header/Header.js';
import AgentsContainer from './components/AgentsContainer/AgentsContainer.js';
import AgentInformationPanel from './components/AgentInformationPanel/AgentInformationPanel.js';
import { PanelContextProvider } from './contexts/Panel.context.js';
import './App.css';

function App() {
	return (
		<main>
			<Header />
			<PanelContextProvider>
				<AgentsContainer />
				<AgentInformationPanel />
			</PanelContextProvider>
		</main>
	);
}

export default App;
