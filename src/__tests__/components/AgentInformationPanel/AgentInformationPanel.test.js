import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AgentInformationPanel from '../../../components/AgentInformationPanel/AgentInformationPanel.js';
import agentsMock from '../../../agentsMock/agentsMock.js';
import { PanelContext } from '../../../contexts/Panel.context.js';

const agent = agentsMock[0];
const agentName = agent.displayName;
const agentRole = agent.role.displayName;
const agentAbilities = agent.abilities;

const Context = {
	agent: agent,
	loading: true,
	renderPanel: true
};

const rejectedContext = {
	agent: undefined,
	loading: true,
	error: { message: 'Something went wrong! D:' },
	renderPanel: true
};

test('Should render "Loading" div when there is no data yet', async () => {
	render(
		<PanelContext.Provider value={Context}>
			<AgentInformationPanel />
		</PanelContext.Provider>
	);

	waitFor(() => {
		const statusElements = screen.findByRole('loading_elem');
		const loadingGif = screen.findByAltText(/tactibear gif/i);
		const loadingText = screen.findByText(/loading.../i);

		expect(statusElements).toBeInTheDocument();

		expect(loadingGif).toBeInTheDocument();
		expect(loadingText).toBeInTheDocument();

		expect(statusElements).not.toBeInTheDocument();
	});
});

test('Should render "Error" message when API call fails', async () => {
	render(
		<PanelContext.Provider value={rejectedContext}>
			<AgentInformationPanel />
		</PanelContext.Provider>
	);

	const statusElements = await screen.findByRole('error_elem');
	const errorText = await screen.findByText('Something went wrong! D:');

	expect(statusElements).toBeInTheDocument();
	expect(errorText).toBeInTheDocument();
});

describe('Should render Agent Information Panel when API responds successfully', () => {
	beforeEach(() => {
		render(
			<PanelContext.Provider value={Context}>
				<AgentInformationPanel />
			</PanelContext.Provider>
		);
	});

	test('Should render a "Close Panel" button', async () => {
		const closePanelButton = await screen.findByText(/x/i);

		expect(closePanelButton).toBeInTheDocument();
	});

	test('Should render the correct Agent name', async () => {
		const agentNameElement = await screen.findByText('> Fade <');

		expect(agentNameElement).toHaveTextContent(agentName);
		expect(agentNameElement).toBeInTheDocument();
	});

	test('Should render the correct Agent role', async () => {
		const agentRoleTitle = await screen.findByText('// Role');
		const agentRoleElement = await screen.findByText(/initiator/i);
		const agentRoleIcon = await screen.findByAltText(`${agentName} Role Icon`);

		expect(agentRoleTitle).toBeInTheDocument();
		expect(agentRoleElement).toHaveTextContent(agentRole);
		expect(agentRoleElement).toBeInTheDocument();
		expect(agentRoleIcon).toBeInTheDocument();
	});

	test('Should render the correct Agent abilities', async () => {
		const agentAbilitiesTitle = await screen.findByText('// Abilities');
		const agentAbilitiesElements = await screen.findAllByRole('agent-ability');

		expect(agentAbilitiesTitle).toBeInTheDocument();

		expect(agentAbilitiesElements).toHaveLength(4);

		agentAbilitiesElements.map((abilityElement, i) => {
			const abilityIcon = screen.getByAltText(
				`${agentName} '${agentAbilities[i].displayName}' Ability Icon`
			);

			expect(abilityElement).toBeInTheDocument();
			expect(abilityElement).toHaveTextContent(agentAbilities[i].displayName);
			expect(abilityElement).toHaveTextContent(agentAbilities[i].description);

			expect(abilityIcon).toBeInTheDocument();
		});
	});
});
