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
import Box from "../../components/Layout/Box";

const Relaties = () => {
    const relations = [{test: "test"},{test: "test2"}]

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

    const handleChangeProfileIcon = () => {
        alert("Changed icon")
    }

    return (
        <Layout title="Relaties">
            <SubHeader>
                <Search onChange={handleSearch} placeholder="Search..." />
                <Button color="secondary" onClick={() => setButtonPopup(true)}>Nieuw</Button>
                <Button color="primary" onClick={toggleFilter}>Filter</Button>
            </SubHeader>
            <Box>
                <Box display="flex" alignItems="center" justifyContent="space-between" p="1.5rem" borderBottom={["15px solid"]} borderColor="secondary">
                    <p>Naam relatie</p>
                    <p>Gegevens relatie</p>
                    <p>Contactgegevens</p>
                    <p>Status relatie</p>
                </Box>
                {
                    relations.map((relation, index) =>
                    <div key={index}>
                        <RelationInfo key={relation.id} companyName={relation.companyName} straat={relation.straat} postcode={relation.postcode} stad={relation.stad} statusName={relation.statusName} />
                    </div>)
                }
            </Box>
            
            {filter && <Filter display="block">
                <h1>Filter</h1>
                <Box display="flex" alignItems="center">
                    <FilterOption onChange={handleFilterOption1}/>
                    <h3>Optie 1</h3>
                </Box>
                <Box display="flex" alignItems="center">
                    <FilterOption onChange={handleFilterOption1}/>
                    <h3>Optie 2</h3>
                </Box>
                <Box display="flex" alignItems="center">
                    <FilterOption onChange={handleFilterOption1}/>
                    <h3>Optie 3</h3>
                </Box>
            </Filter>}

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h1>Nieuwe Relatie</h1>
                <ButtonProfileImage onClick={handleChangeProfileIcon}>+</ButtonProfileImage>
                <div>
                    <InputPopup type="text" placeholder="Name.."/>
                    <InputPopup type="text" placeholder="Adress.."/>
                    <InputPopup type="text" placeholder="Postalcode.."/>
                    <InputPopup type="text" placeholder="Place.."/>
                    <InputPopup type="text" placeholder="Tel-Nr.."/>
                    <InputPopup type="email" placeholder="Email.."/>
                    <InputPopup type="text" placeholder="KVK.."/>
                </div>
                <Box display="flex" justifyContent="space-around">
                    <Button margin={10} color="primary" onClick={() => setButtonPopup(false)}>Annuleren</Button>
                    <Button margin={10} color="secondary"onClick={handleNewRelation}>Opslaan</Button>
                </Box>
            </Popup>
        </Layout>
    )
}

const ButtonProfileImage = styled.button` 
    margin: 10px;
    height: 100px;
    width: 100px;
    border-radius: 64px;
    border: 2.5px solid ${({theme: {colors} }) => colors.white};
    background-color: ${({theme: {colors} }) => colors.white};
    &:hover {
        filter: brightness(80%);
    }
    `
export default Relaties;