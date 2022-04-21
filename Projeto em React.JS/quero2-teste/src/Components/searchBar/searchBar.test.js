import { render, screen } from '@testing-library/react'
import { SearchBar } from './searchBar'

describe('testa a barra de pesquisa', () => {
    test('contém o elemento input de busca', () => {
        render(<SearchBar />);
        const input = screen.getByRole(/busca/i);
        expect(input).toBeInTheDocument();
    });

    test('contém o texto "Busca" no placeholder do input de busca', () => {
        render(<SearchBar />);
        const text = screen.getByPlaceholderText(/busca/i);
        expect(text).toBeInTheDocument();
    });

    test('contém o botão de busca', () => {
        render(<SearchBar />);
        const button = screen.getByRole(/button/i);
        expect(button).toBeInTheDocument();
    });
});

