import Box from "./Box";

const FilterOption = ({children, onChange}) => {
    return(
        <>
            <Box type="checkbox" onChange={onChange} as="input" width={10} height="auto">
                {children} 
            </Box>
        </>
    )
}

export default FilterOption;