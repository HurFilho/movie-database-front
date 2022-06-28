import { useState } from 'react'
import { LeftContainer, RightContainer, Home, Header, InputGroup, SearchInput, SearchButton } from './styles'

export const SearchBar = (props) => {
    const [searchedString, setSearchedString] = useState("")
    const resetSearch = () => { setSearchedString(""); props.returnFunction() }
    return (<>
        <Header>
            <LeftContainer>
                <Home onClick={() => resetSearch()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        className="bi bi-house" viewBox="0 0 16 16">
                        <path fill-d="evenodd" d={`M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 
                            1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z`} />
                        <path fill-d="evenodd" d={`M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 
                            1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z`} /></svg>
                </Home>
            </LeftContainer>
            <InputGroup>
                <SearchButton onClick={() => searchedString !== '' ? props.action(searchedString) : void 0}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-search" viewBox="0 0 16 16">
                        <path d={`M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 
                            0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z`} /></svg>
                </SearchButton>
                <SearchInput ref={props.children} value={searchedString} onChange={(e) => setSearchedString(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && searchedString !== '' ? props.action(searchedString) : void 0}
                ></SearchInput>
            </InputGroup>
            <RightContainer />
        </Header>
    </>)
}