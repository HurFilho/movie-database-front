import styled from 'styled-components'

export const Card = styled.article.attrs(() => ({ className: 'col' }))`
padding: 0;`

export const Container = styled.div.attrs(() => ({ className: 'row', role: 'background' }))`
margin: 1rem;
min-width: 500px;
background: rgb(0,0,0);
background: -moz-linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
background: -webkit-linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
border-radius: 0 40px 0 0;`

export const MoviePoster = styled.img.attrs(() => ({ className: 'col-3', role: 'poster-movie' }))`
margin-top: 0.5em;
max-width: 100%;
align-self: baseline;
object-fit: contain;`

export const InfoContainer = styled.article.attrs(() => ({ className: 'col-9' }))``

export const Title = styled.h5.attrs(() => ({ role: 'titulo' }))`
color: white;
margin: .5em 2em .5em 0;`

export const Label = styled.label`
color: #666666;
font-weight: 600;`

export const ReleaseDate = styled.h6.attrs(() => ({ role: 'data-de-lancamento' }))`
color: white;
margin: 0 2em .5em 0;`

export const Sinopse = styled.p.attrs(() => ({ role: 'sinopse' }))`
color: white;`