import { render, screen } from '@testing-library/react';
import MovieCard from './movieCard';

test('contém o background do card', () => {
    render(<MovieCard />);
    const background = screen.getByRole(/background/i);
    expect(background).toBeInTheDocument();
});

test('o estilo do background está correto', () => {
    render(<MovieCard />);
    const background = screen.getByRole(/background/i);
    expect(background).toHaveStyle
        (("border-radius: 0 60px 0 0; max-height: 200px; background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);"));
});

test('contém uma imagem de poster', () => {
    render(<MovieCard />);
    const poster = screen.getByRole(/poster/i);
    expect(poster).toBeInTheDocument
});

test('contém o título do filme', () => {
    render(<MovieCard />);
    const titulo = screen.getByRole(/titulo/i);
    expect(titulo).toBeInTheDocument
});

test('contém a label "Data de lançamento"', () => {
    render(<MovieCard />);
    const label = screen.getByText(/data de lançamento/i);
    expect(label).toBeInTheDocument
});

test('contém a data de lançamento do filme', () => {
    render(<MovieCard />);
    const data = screen.getByRole(/data-de-lancamento/i);
    expect(data).toBeInTheDocument
});

test('contém a label "Sinopse"', () => {
    render(<MovieCard />);
    const label = screen.getByText(/sinopse/i);
    expect(label).toBeInTheDocument
});

test('contém a sinopse do filme', () => {
    render(<MovieCard />);
    const sinopse = screen.getByRole(/sinopse/i);
    expect(sinopse).toBeInTheDocument
});