import styled from "styled-components";
import TextField from "./TextField";


const Search = ({children, onChange, placeholder}) => {
    return (
        <SearchBar type="text" onChange={onChange} placeholder={placeholder}>
            {children}
        </SearchBar>
    )
};

const SearchBar = styled(TextField)`
    border: 2.5px solid ${({theme: {colors} }) => colors.secondary};
    box-sizing: border-box;
    width: 60%;
    height: 60px;
    `;

export default Search;