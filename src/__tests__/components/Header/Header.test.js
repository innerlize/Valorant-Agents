import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../../components/Header/Header.js';

test('Renders title', () => {
	render(<Header />);

	const logoElement = screen.getByAltText(/logo/i);

	const titleElement = screen.getByText(/valorant agents/i);
	const subtitleElement = screen.getByTestId('subtitle');

	expect(logoElement).toBeInTheDocument();
	expect(titleElement).toBeInTheDocument();
	expect(subtitleElement.textContent).toBe('Created by Alan');
});
