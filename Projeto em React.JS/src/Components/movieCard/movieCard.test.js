import { render, screen } from '@testing-library/react'
import { MovieCard } from './movieCard'

test('contém o background do card', () => {
    render(<MovieCard />);
    const background = screen.getByRole(/background/i);
    expect(background).toBeInTheDocument();
});

test('o estilo do background está correto', () => {
    render(<MovieCard />);
    const background = screen.getByRole(/background/i);
    expect(background).toHaveStyle
        ((`margin: 1rem; min-width: 500px; background: rgb(0,0,0);
        background: -moz-linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
        background: -webkit-linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
        background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
        border-radius: 0 40px 0 0;`));
});

test('contém uma imagem de poster', () => {
    render(<MovieCard />);
    const poster = screen.getByRole(/poster-movie/i);
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
    const label = screen.findByText(/sinopse/i);
    expect(label).toBeInTheDocument
});

test('contém a sinopse do filme', () => {
    render(<MovieCard />);
    const sinopse = screen.getByRole(/sinopse/i);
    expect(sinopse).toBeInTheDocument
});