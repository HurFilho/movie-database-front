import styled, { css } from 'styled-components'

const colors = css`
background-color: #333333;
color: #999999;`

export const LeftContainer = styled.div
    `${colors};
text-align: center;
border-radius: 15px;
max-width: 60px;
padding: 0;
margin: 1rem;`

export const Home = styled.button.attrs(() => ({ className: 'btn' }))
    `${colors};
border-radius: 15px;
border-width: 0;`

export const RightContainer = styled.div`
border-radius: 15px;
max-width: 60px;
margin: 1rem;`

export const InputGroup = styled.div.attrs(() => ({ className: 'input-group mb-3 col', role: 'input-group' }))
    `${colors};
border-radius: 15px;
min-width: 200px;
max-width: 600px;
margin: 1rem;`

export const SearchButton = styled.button.attrs(() => ({ className: 'btn' }))
    `${colors};
border-radius: 0;
border-width: 0;`

export const SearchInput = styled.input.attrs(() => ({ className: 'form-control', role: 'busca', placeholder: 'Busca', type: 'text' }))
    `${colors};
border-width: 0;
height: 50px;
&:focus {
border-radius: 0;
color: #CCCCCC;
background-color: inherit;}`

export const Header = styled.section.attrs(() => ({ className: 'row', role: 'header' }))`
background-color: black;
margin: 0;
padding: .5rem;
display: flex;
justify-content: space-between;
max-height: 160px;`

