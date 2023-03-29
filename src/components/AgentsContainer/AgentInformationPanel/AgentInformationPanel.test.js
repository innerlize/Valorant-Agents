import React from 'react';
import { render, screen } from '@testing-library/react';
import AgentInformationPanel from './AgentInformationPanel.js';
import agentsMock from '../../../agentsMock/agentsMock.js';
import axios from 'axios';

const agent = agentsMock[0];
const agentID = agent.uuid;
const agentName = agent.displayName;
const agentRole = agent.role.displayName;
const agentAbilities = agent.abilities;

jest.mock('axios');

beforeEach(() => {
	axios.get.mockResolvedValue({
		data: { data: agent },
		loading: true,
		error: 'Something went wrong D:'
	});
});

afterEach(() => {
	axios.mockRestore();
});

test('Should render "Loading" div when there is no data yet', async () => {
	render(<AgentInformationPanel agentID={agentID} renderPanel={true} />);

	const loadingGif = await screen.findByAltText(/tactibear gif/i);
	const loadingText = await screen.findByText(/loading.../i);

	expect(loadingGif).toBeInTheDocument();
	expect(loadingText).toBeInTheDocument();
});

test('Should render "Error" message when API call fails', async () => {
	axios.get.mockRejectedValue(new Error('Something went wrong D:'));

	render(<AgentInformationPanel agentID={agentID} renderPanel={true} />);

	const errorElement = await screen.findByText(
		'Error: Something went wrong D:'
	);

	expect(errorElement).toBeInTheDocument();
});

describe('Should render Agent Information Panel when API responds successfully', () => {
	beforeEach(() => {
		render(<AgentInformationPanel agentID={agentID} renderPanel={true} />);
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
