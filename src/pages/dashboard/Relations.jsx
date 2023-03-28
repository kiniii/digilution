import { useEffect, useState } from "react";

import RelationInfo from "../../components/Layout/RelationInfo"
import Layout from "../../components/Layout/Layout"
import SubHeader from "../../components/Layout/SubHeader";
import Button from "../../components/buttons/Button";
import Popup from "../../components/Popups/Popup"
import Search from "../../components/fields/SearchBar";

const Relaties = () => {
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
        <Layout title="Relaties">
            <SubHeader>
                <Search onChange={handleSearch} placeholder="Search..." />
                <Button color="secondary" onClick={() => setButtonPopup(true)}>Nieuw</Button>
                <Button color="primary" onClick={openFilter}>Filter</Button>
            </SubHeader>
            
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h1>test</h1>
                
            </Popup>
        </Layout>
    )
}

export default Relaties;