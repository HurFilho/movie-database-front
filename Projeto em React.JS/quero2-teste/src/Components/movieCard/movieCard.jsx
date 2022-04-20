import { useState } from 'react'
import { Card, Container, MoviePoster, InfoContainer, Title, Label, ReleaseDate, Sinopse } from './styles'

export const MovieCard = () => {
    const [movieData, setMovieData] = useState(drStrange)
    return (
        <Card>
            <Container>
                <MoviePoster src={movieData.poster_path} />
                <InfoContainer>
                    <Title>{movieData.title}</Title>
                    <Label>Data de lançamento:</Label>
                    <ReleaseDate>{movieData.release_date}</ReleaseDate>
                    <Label>Sinopse:</Label>
                    <Sinopse>{movieData.overview}</Sinopse>
                </InfoContainer>
            </Container>
        </Card>
    )
}

const drStrange = {
    poster_path: 'https://image.tmdb.org/t/p/w185/hq2igFqb31fDqGotz8ZuUfwKgn8.jpg',
    id: '453395',
    title: 'Doutor Estranho no Multiverso da Loucura',
    overview: 'O arco de ‘Doutor Estranho no Multiverso na Loucura‘ gira em torno da Feiticeira Escarlate, que perde o controle dos seus poderes e, por consequência, cria uma realidade alternativa onde tudo é diferente – o que pode explicar o título ‘multiverso da loucura‘.',
    release_date: '2022-05-04',
}



// const movie = () => {
//     return {
    //         poster_path: 'http://image.tmdb.org/t/p/w185/hq2igFqb31fDqGotz8ZuUfwKgn8.jpg',
//         backdrop_path: 'http://image.tmdb.org/t/p/w185/ndCSoasjIZAMMDIuMxuGnNWu4DU.jpg',
//         id: '453395',
//         title: 'Doutor Estranho no Multiverso da Loucura',
//         overview: 'Doctor Strange in the Multiverse of Madness","overview":"O arco de ‘Doutor Estranho no Multiverso na Loucura‘ gira em torno da Feiticeira Escarlate, que perde o controle dos seus poderes e, por consequência, cria uma realidade alternativa onde tudo é diferente – o que pode explicar o título ‘multiverso da loucura‘.',
//         release_date: '2022-05-04',
//     }
// }