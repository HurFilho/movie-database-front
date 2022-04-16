import { render, screen } from '@testing-library/react';
import SearchBar from './searchBar';

test('contém o background da barra de pesquisa', () => {
    render(<SearchBar />);
    const background = screen.getByRole(/background/i);
    expect(background).toBeInTheDocument();
});

test('o estilo do background está correto', () => {
    render(<SearchBar />);
    const text = screen.getByRole(/container/i);
    expect(text).toHaveStyle(("background-color: #333333; border-radius: 15px; max-width: 800px; height: 80px; align-items: left"));
});

test('contém o elemento input de busca', () => {
    render(<SearchBar />);
    const input = screen.getByRole(/input/i);
    expect(input).toBeInTheDocument();
});

test('contém o placeholder "Busca" no input de busca', () => {
    render(<SearchBar />);
    const text = screen.getByPlaceholderText(/busca/i);
    expect(text).toBeInTheDocument();
});

test('o estilo do placeholder "Busca" no input de busca está correto', () => {
    render(<SearchBar />);
    const text = screen.getByPlaceholderText(/busca/i);
    expect(text).toHaveStyle(("color: #999999; font-family: 'Lato', sans-serif; font-size: 40px"));
});

test('contém o botão de busca', () => {
    render(<SearchBar />);
    const button = screen.getByRole(/button/i);
    expect(button).toBeInTheDocument();
});

