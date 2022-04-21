import styled, { css } from 'styled-components'

const colors = css`
background-color: #333333;
color: #999999;`

export const InputGroup = styled.div.attrs(() => ({ className: 'input-group mb-3 col', role: 'input-group' }))
    `${colors};
border-radius: 15px;
min-width: 200px;
max-width: 600px;
margin-top: 1rem;`

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
justify-content: center;
max-height: 160px;`