import axios from 'axios'

const api_key = 'fe65f8e840e15d06c5c00bf13084da74'
const language = 'pt-BR'

export const TMDB = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie`
})

export const createRequest = {
  'getMovies': (pageNumber = '1') => {
    return (`/upcoming?api_key=${api_key}&language=${language}&page=${pageNumber}`)
  }
}