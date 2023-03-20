import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders title', () => {
	render(<App />);
	const titleElement = screen.getByText(/valorant agents/i);
	expect(titleElement).toBeInTheDocument();
});
