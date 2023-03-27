import { useEffect, useState } from "react";

import RelationInfo from "../../components/Layout/RelationInfo"
import Layout from "../../components/Layout/Layout"
import SubHeader from "../../components/Layout/SubHeader";
import Button from "../../components/buttons/Button";
import Popup from "../../components/Popups/Popup"
import Search from "../../components/fields/SearchBar";

const Relaties = () => {
    const [count, setCount] = useState(0);

    const relations = ["alle relaties in de database"]

    relations.forEach(element => {
            <RelationInfo />
        });

    const openFilter = () => {
        alert("test")
    }

    const [buttonPopup, setButtonPopup] = useState(false);

    const handleSearch = (event) => {
        alert("test2")
    }

    return (
        <Layout title="Instellingen">
            <SubHeader>
                <Search onChange={handleSearch} placeholder="Search..." />
                <Button onClick={() => setButtonPopup(true)}>Nieuw</Button>
                <Button onClick={openFilter}>Filter</Button>
            </SubHeader>
            
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h1>test</h1>
                
            </Popup>
        </Layout>
    )
}

export default Relaties;