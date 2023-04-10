import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AgentsContainer from '../../../components/AgentsContainer/AgentsContainer.js';
import agentsMock from '../../../agentsMock/agentsMock.js';
import { PanelContext } from '../../../contexts/Panel.context.js';
import axios from 'axios';

beforeEach(() => {
	jest.spyOn(axios, 'get').mockResolvedValue({
		data: { data: agentsMock },
		loading: true,
		error: 'Something went wrong! D:'
	});
});

afterEach(() => {
	jest.clearAllMocks();
});

test('Should render "Loading" div when there is no data yet', async () => {
	render(
		<PanelContext.Provider value={PanelContext}>
			<AgentsContainer />
		</PanelContext.Provider>
	);

	waitFor(() => {
		const loadingGif = screen.findByAltText(/tactibear gif/i);
		const loadingText = screen.findByText(/loading.../i);

		expect(loadingGif).toBeInTheDocument();
		expect(loadingText).toBeInTheDocument();
	});
});

test('Should render "Error" message when API call fails', async () => {
	axios.get.mockRejectedValue(new Error('Something went wrong! D:'));

	render(<AgentsContainer />);

	const errorElement = await screen.findByText('Something went wrong! D:');

	expect(errorElement).toBeInTheDocument();
});

describe('Should render Agents cards when API responds successfully', () => {
	beforeEach(() => {
		render(
			<PanelContext.Provider value={PanelContext}>
				<AgentsContainer />
			</PanelContext.Provider>
		);
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
