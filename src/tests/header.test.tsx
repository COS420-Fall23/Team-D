import { fireEvent, render, screen } from '@testing-library/react'; // Add the missing import for getByText
import { Header } from '../components/Header';
import { MemoryRouter, useLocation } from 'react-router-dom';

test('renders correct text based on page', () => {
    // Render the header component with a specific initial route
    render(
        <MemoryRouter initialEntries={['/']}>
            <Header />
        </MemoryRouter>
    );

    // Check if the correct text is rendered based on the page
    fireEvent.click(screen.getByText('Resource Page'));

    // Check if the correct text is rendered based on the page
    expect(screen.getByText('Home Page')).toBeInTheDocument();

    // Click the link with text 'Home Page'
    fireEvent.click(screen.getByText('Home Page'));

    // Check if the correct text is rendered based on the page
    expect(screen.getByText('Resource Page')).toBeInTheDocument();

});
