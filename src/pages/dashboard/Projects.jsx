import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout/Layout";
import Button from "../../components/buttons/Button";
import Popup from "../../components/Popups/Popup";
import InputPopup from "../../components/Popups/InputPopup";
import Search from "../../components/fields/SearchBar";
import Filter from "../../components/Layout/Filter";
import FilterOption from "../../components/Layout/FilterOption";
import Widget from "../../components/fields/Widget";
//import SubHeader from "../../components/Layout/SubHeader";
import ProjectsBox from "../../Components/ProjectsBox";
//import ProgressBar from "../../Components/ProgressBar";

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

    const navigate = useNavigate();

    const handlePageRedirect = () => {
        console.log("handlepageredirect is gelukt");
        navigate("/project");
    }

    return (
        <Layout title="Projecten">
            <SubHeader>
                <Search onChange={handleSearch} placeholder="Zoeken..." />
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

            <Div>
                <Grid>
                    <Widget onClick={handlePageRedirect}>
                        <ProjectsBox></ProjectsBox>
                    </Widget>
                    <Widget />
                    <Widget />
                </Grid>
            </Div>
        </Layout>
    )
}

const FilterClick = styled.div` 
    display: flex;
    align-items: center;
    `

const Div = styled.div`
    grid-column-start: 2;
    grid-column-end: 6;
    margin: 1rem;
    padding: 80px 0px;
    `

const Grid = styled.div`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(3fr);
    `

const SubHeader = styled.div`
    justify-content: space-around;
    padding: 30px 0px;
    grid-column-start: 2;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 3;
    display: flex;
    background-color: ${({theme: {colors} }) => colors.darkBackground};
    `
export default Projecten;