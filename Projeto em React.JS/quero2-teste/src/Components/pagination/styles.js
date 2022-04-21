import styled from 'styled-components'

export const PageList = styled.ul.attrs(() => ({
    className: 'pagination justify-content-center',
    role: 'pagination'
}))`
margin: .2rem;`

export const PageNumber = styled.li.attrs(() => ({ className: 'page-item' }))`
color: ${props => props.selected ? 'white' : '#888888'};
margin: .4em;
font-weight: 500;
cursor: pointer;
&:hover {
    color: #CCCCCC;
    font-weight: 700;
};`

export const Footer = styled.footer.attrs(() => ({ className: 'row' }))`
background-color: #182142;
margin: 0;
display: flex;
position: fixed;
bottom: 0;
width: 100%;
justify-content: center;`