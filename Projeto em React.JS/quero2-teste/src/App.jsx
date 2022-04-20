import React from 'react'
import styled from 'styled-components'
import { SearchBar } from './Components/searchBar/searchBar'
import { MovieCard } from './movieCard/movieCard'

import './App.css'

export const App = () => {
  return (
    <>
      <Header>
        <SearchBar />
      </Header>
      <div className="row">
        <MovieCard />
        <MovieCard />
      </div>
    </>
  );
}

const Header = styled.section.attrs(() => ({ className: 'row', role: 'header' }))`
background-color: black;
margin: 0;
padding: 1rem;
display: flex;
justify-content: center;
max-height: 160px;`
