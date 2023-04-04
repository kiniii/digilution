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

const Instellingen = () => {
    const relations = [{test: "test"},{test: "test2"}]

    const [filter, setFilter] = useState(false);
    const [gridColumnEnd, setGridColumnEnd] = useState(6);

    const toggleFilter = () => {
        setFilter(!filter)
        setGridColumnEnd(filter ? 6 : 5);
    };

    const [buttonPopup, setButtonPopup] = useState(false);

    const handleSearch = (event) => {
        alert("test2")
    }

    const handleNewUser = () => {
        alert("New user")
    }

    const handleFilterOption1 = (event) => {
        console.log("test")
    }

    return (
        <Layout title="Instellingen">
            <SubHeader>
                <Search onChange={handleSearch} placeholder="Search..." />
                <Button color="secondary" onClick={() => setButtonPopup(true)}>Nieuw</Button>
                <Button color="primary" onClick={toggleFilter}>Filter</Button>
            </SubHeader>
            <Content gridColumnEnd={gridColumnEnd}>
                <RelationHeader>
                    <p>Naam gebruiker</p>
                    <p>Gegevens gebruiker</p>
                    <p>Contactgegevens</p>
                    <p>Gebruikerstype</p>
                </RelationHeader>
                {
                    relations.map((relation, index) =>
                    <div key={index}>
                        <RelationInfo key={relation.id} companyName={relation.companyName} straat={relation.straat} postcode={relation.postcode} stad={relation.stad} statusName={relation.statusName} />
                    </div>)
                }
            </Content>
            
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
                <h1>Nieuwe Gebruiker</h1>
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
                <ButtonPos>
                    <Button margin={10} color="primary" onClick={() => setButtonPopup(false)}>Annuleren</Button>
                    <Button margin={10} color="secondary"onClick={handleNewUser}>Opslaan</Button>
                </ButtonPos>
            </Popup>
        </Layout>
    )
}
const FilterClick = styled.div` 
    display: flex;
    align-items: center;
    `
const RelationHeader = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 15px solid ${({theme: {colors} }) => colors.secondary};
    padding: 20px;
    `
const Content = styled.div` 
    grid-column-start: 2;
    grid-column-end: ${({gridColumnEnd}) => gridColumnEnd};
    grid-row-start: 3;
    grid-row-end: 8;
    `
const ButtonPos = styled.div` 
    display: flex;
    justify-content: space-around;
    
    `
export default Instellingen;