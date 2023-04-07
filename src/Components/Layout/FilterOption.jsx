import Box from "./Box";

const FilterOption = ({children, onChange}) => {
    return(
        <>
            <Box as="input" width={10} height="auto" type="checkbox" onChange={onChange}>
                {children} 
            </Box>
        </>
    )
}

export default FilterOption;