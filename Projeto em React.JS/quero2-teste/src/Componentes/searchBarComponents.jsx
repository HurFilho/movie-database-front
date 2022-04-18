import styled from 'styled-components'

export const InputGroup = styled.div.attrs(() => ({
    className: 'input-group mb-3 row',
    role: 'input-group',
}))`
background-color: #333333;
border-radius: 15px;
max-width: 600px;
align-items: left;
margin-top: 1rem;
`

export const SearchInput = styled.input.attrs(() => ({
    className: 'col',
    role: 'busca',
    placeholder: 'Busca',
    type: 'text',
}))`
color: #999999;
background-color: #333333;
border-width: 0;
height: 60px;
align-items: left;
&:focus {outline: none;}
`

export const SearchButton = styled.button.attrs(() => ({
    className: 'col-1',
}))`
color: #999999;
border-radius: 0;
background-color: #333333;
border-width: 0;
font-size: 40px";
`