import styled from "styled-components";

const FilterOption = ({children, onChange}) => {
    return(
        <>
            <FilterOptionStyle type="checkbox" onChange={onChange}>
                {children} 
            </FilterOptionStyle>
        </>
    )
}

const FilterOptionStyle = styled.input` 
    width: 10px;
    height: auto;
    `

export default FilterOption;