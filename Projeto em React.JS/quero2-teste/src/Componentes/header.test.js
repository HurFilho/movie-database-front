import { render, screen } from '@testing-library/react';
import Header from './header';

test('contém o background do header', () => {
    render(<SearchBar />);
    const background = screen.getByRole(/background/i);
    expect(background).toBeInTheDocument();
});

test('o estilo do background está correto', () => {
    render(<Header />);
    const text = screen.getByRole(/container/i);
    expect(text).toHaveStyle(("background-color: #000000; align-items: center, max-height: 160px"));
});

