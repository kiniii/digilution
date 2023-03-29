import { useEffect, useState } from "react";
import styled from "styled-components";

import Layout from "../../components/Layout/Layout"
import SubHeader from "../../components/Layout/SubHeader";
import Button from "../../components/buttons/Button";
import Popup from "../../components/Popups/Popup"
import Search from "../../components/fields/SearchBar";
import Filter from "../../components/Layout/Filter";
import FilterOption from "../../components/Layout/FilterOption";

const Projecten = () => {
    const [filter, setFilter] = useState(false);

    const toggleFilter = () => {
        setFilter(!filter)
    };

    const [buttonPopup, setButtonPopup] = useState(false);

    const handleSearch = (event) => {
        alert("test2")
    }

    const handleFilterOption1 = (event) => {
        console.log("test")
    }

    return (
        <Layout title="Projecten">
            <SubHeader>
                <Search onChange={handleSearch} placeholder="Search..." />
                <Button color="secondary" onClick={() => setButtonPopup(true)}>Nieuw</Button>
                <Button color="primary" onClick={toggleFilter}>Filter</Button>
            </SubHeader>
            {filter && <Filter display="block">
                <h1>Filter</h1>
                <FilterClick>
                    <FilterOption onChange={handleFilterOption1}/>
                    <h3>Optie 1</h3>
                </FilterClick>
                <FilterClick>
                    <FilterOption onChange={handleFilterOption1}/>
                    <h3>Optie 2</h3>
                </FilterClick><FilterClick>
                    <FilterOption onChange={handleFilterOption1}/>
                    <h3>Optie 3</h3>
                </FilterClick>
            </Filter>}
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h1>test</h1>
                
            </Popup>
        </Layout>

        
    )
}

const FilterClick = styled.div` 
    display: flex;
    align-items: center;
    `
export default Projecten;