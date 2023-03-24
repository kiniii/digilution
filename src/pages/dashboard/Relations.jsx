import { useEffect, useState } from "react";
import RelationInfo from "../../components/Layout/RelationInfo"
import Layout from "../../components/Layout/Layout"

const Dashboard = () => {
    const [count, setCount] = useState(0);

    const relations = ["alle relaties in de database"]

    relations.forEach(element => {
            <RelationInfo />
        });

    function CurrentPageName(){
        setCurrentPage('Relaties')
    }

    return (
        <Layout title="Relaties">
            <button onClick={() => setCount(count + 1)}>Count</button>
        </Layout>
    )
}

export default Dashboard;