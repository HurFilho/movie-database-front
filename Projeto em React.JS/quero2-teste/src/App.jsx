import { useEffect, useState } from 'react'
import { SearchBar } from './Components/searchBar/searchBar'
import { MovieCard } from './Components/movieCard/movieCard'
import { TMDB, createRequest } from './Connector/TmdbConnector'
import { Pagination } from './Components/pagination/pagination'

import './style.css'

export const App = () => {
  const goToPage = (pageNumber) => {
    TMDB
      .get(createRequest.getMovies(pageNumber))
      .then((response) => setMoviesList(response.data))
      .catch((err) => { console.error('Um erro ocorreu enquanto buscando a lista de filmes.' + err) })
  }
  const LoadMovies = () => { useEffect(() => { goToPage() }, []) }

  const searchMovies = (searchedTerms) => {
    TMDB
      .get(createRequest.searchMovies(searchedTerms))
      .then((response) => setMoviesList(response.data))
      .catch((err) => { console.error('Um erro ocorreu enquanto buscando a lista de filmes.' + err) })
  }
  const [moviesList, setMoviesList] = useState(LoadMovies())
  return (
    <>
      <SearchBar action={searchMovies} />
      <div className="row" style={{ width: '100%', margin: '0 0 4em 0' }}>
        {moviesList ? moviesList.results.map((item) => <MovieCard key={item.id} movie={item} />) : void 0}
      </div>
      {moviesList ?
        <Pagination total_pages={moviesList.total_pages} actual_page={moviesList.page} action={goToPage} /> :
        void 0}
    </>
  );
}

