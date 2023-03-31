import { useEffect, useState } from "react";
import styled from "styled-components";

import RelationInfo from "../../components/fields/RelationInfo"
import Layout from "../../components/Layout/Layout"
import SubHeader from "../../components/Layout/SubHeader";
import Button from "../../components/buttons/Button";
import Popup from "../../components/Popups/Popup";
import InputPopup from "../../components/Popups/InputPopup";
import Search from "../../components/fields/SearchBar";
import Filter from "../../components/Layout/Filter";
import FilterOption from "../../components/Layout/FilterOption";

const Relaties = () => {
    const relations = ["alle relaties in de database"]

   

    relations.forEach(element => {
            <RelationInfo />
        });

    const [filter, setFilter] = useState(false);

    const toggleFilter = () => {
        setFilter(!filter)
    };

    const [buttonPopup, setButtonPopup] = useState(false);

    const handleSearch = (event) => {
        alert("test2")
    }

    const handleNewRelation = () => {
        alert("New relation")
    }

    const handleFilterOption1 = (event) => {
        console.log("test")
    }

    return (
        <Layout title="Relaties">
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
                <h1>Nieuwe Relatie</h1>
                <img src="" alt="" />
                <div>
                    <InputPopup type="text" placeholder="Name.."/>
                    <InputPopup type="text" placeholder="Adress.."/>
                    <InputPopup type="text" placeholder="Postalcode.."/>
                    <InputPopup type="text" placeholder="Place.."/>
                    <InputPopup type="text" placeholder="Tel-Nr.."/>
                    <InputPopup type="email" placeholder="Email.."/>
                    <InputPopup type="text" placeholder="KVK.."/>
                </div>
                <div>
                    <Button color="primary" onClick={() => setButtonPopup(false)}>Annuleren</Button>
                    <Button color="secondary"onClick={handleNewRelation}>Opslaan</Button>
                </div>
            </Popup>
        </Layout>
    )
}
const FilterClick = styled.div` 
    display: flex;
    align-items: center;
    `

export default Relaties;