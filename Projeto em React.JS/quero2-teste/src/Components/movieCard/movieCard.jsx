import { Card, Container, MoviePoster, InfoContainer, Title, Label, ReleaseDate, Sinopse, Main } from './styles'

export const MainContainer = Main

export const MovieCard = (props) => {
    const imgBaseUrl = 'http://image.tmdb.org/t/p/w185'
    return (
        <Card>
            <Container>
                <MoviePoster src={
                    props.movie ?
                        props.movie.poster_path ?
                            imgBaseUrl + props.movie.poster_path :
                            require('../../null.jpg') :
                        require('../../null.jpg')} />
                <InfoContainer>
                    <Title>{props.movie ? props.movie.title : ''}</Title>
                    <Label>Data de lançamento:</Label>
                    <ReleaseDate>{props.movie ? props.movie.release_date : ''}</ReleaseDate>
                    <Label>Sinopse:</Label>
                    <Sinopse>{
                        props.movie ? props.movie.overview : 'Este título ainda não possui uma sinopse.'}
                    </Sinopse>
                </InfoContainer>
            </Container>
        </Card>
    )
}