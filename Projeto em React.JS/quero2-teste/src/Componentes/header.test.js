import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('testes do header', () => {
    test('contém o background do header', () => {
        render(<Header />);
        const background = screen.getByRole(/header/i);
        expect(background).toBeInTheDocument();
    });

    test('o estilo do background está correto', () => {
        render(<Header />);
        const background = screen.getByRole(/header/i);
        expect(background).toHaveStyle
            (("background-color: #000000; margin: 0; text-align: -webkit-center; padding: 1rem; display: block; max-height: 160px;"));
    });
})

