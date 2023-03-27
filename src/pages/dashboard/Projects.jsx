import { useEffect, useState } from "react";

import Layout from "../../components/Layout/Layout"
import SubHeader from "../../components/Layout/SubHeader";
import Button from "../../components/buttons/Button";
import Popup from "../../components/Popups/Popup"
import Search from "../../components/fields/SearchBar";

const Projecten = () => {
    const openFilter = () => {
        alert("test")
    }

    const [buttonPopup, setButtonPopup] = useState(false);

    const handleSearch = (event) => {
        alert("test2")
    }

    return (
        <Layout title="Projecten">
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
  
export default Projecten;