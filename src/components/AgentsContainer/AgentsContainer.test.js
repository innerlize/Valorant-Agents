import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AgentsContainer from './AgentsContainer.js';
import agentsMock from '../../agentsMock/agentsMock.js';
import axios from 'axios';

jest.mock('axios');

beforeEach(() => {
	axios.get.mockResolvedValue({
		data: { data: agentsMock },
		loading: true,
		error: 'Something went wrong D:'
	});
});

afterEach(() => {
	axios.mockRestore();
});

test('Should render "Loading" div when there is no data yet', async () => {
	render(<AgentsContainer />);

	waitFor(() => {
		const loadingGif = screen.findByAltText(/tactibear gif/i);
		const loadingText = screen.findByText(/loading.../i);

		expect(loadingGif).toBeInTheDocument();
		expect(loadingText).toBeInTheDocument();
	});
});

test('Should render "Error" message when API call fails', async () => {
	axios.get.mockRejectedValue(new Error('Something went wrong D:'));

	render(<AgentsContainer />);

	const errorElement = await screen.findByText(
		'Error: Something went wrong D:'
	);

	expect(errorElement).toBeInTheDocument();
});

describe('Should render Agents cards when API responds successfully', () => {
	beforeEach(() => {
		render(<AgentsContainer />);
	});

	test('Should render exactly 3 cards', async () => {
		const agentsCards = await screen.findAllByTestId('agent-card');

		expect(agentsCards).toHaveLength(3);
	});

	test('Each card should have the correct Agent name', async () => {
		const agentsNames = await screen.findAllByRole('agent-name');

		expect(agentsNames).toHaveLength(3);

		expect(agentsNames[0]).toHaveTextContent(/fade/i);
		expect(agentsNames[1]).toHaveTextContent(/breach/i);
		expect(agentsNames[2]).toHaveTextContent(/skye/i);
	});

	test('Each card should have a CTA button', async () => {
		const agentsButtons = await screen.findAllByRole('agent-button');

		expect(agentsButtons).toHaveLength(3);

		agentsButtons.map(button => {
			expect(button).toHaveTextContent(/read more/i);
		});
	});
});
