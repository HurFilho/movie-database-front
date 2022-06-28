import { render, screen } from '@testing-library/react';
import { Pagination } from './pagination';

describe('testa a barra de paginação', () => {
    test('contém o botão do número de página', () => {
        render(<Pagination />);
        const item = screen.getByRole(/pagination/i);
        expect(item).toBeInTheDocument();
    })
})