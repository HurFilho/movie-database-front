import { render, screen } from '@testing-library/react';
import Pagination from './pagination';

test('contém o botão do número de página', () => {
    render(<Pagination />);
    const button = screen.getByRole(/button/i);
    expect(button).toBeInTheDocument();
});

test('o estilo do botão na paginação está correto', () => {
    render(<Pagination />);
    const text = screen.getByPlaceholderText(/button/i);
    expect(text).toHaveStyle(("color: #FFFFFF; font-family: 'Open Sans', sans-serif; font-size: 30px"));
});