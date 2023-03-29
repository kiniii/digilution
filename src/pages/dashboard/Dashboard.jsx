import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation"
import Header from "../../components/Header"
import Layout from "../../Components/Layout";
import Button from "../../Components/Button";

const Dashboard = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`hallo ${count} test`)
    }, [count]); 
    return (
        <Layout title="Dashboard">
            <Button onClick={() => setCount(count + 1)}>Count</Button>
        </Layout>
    )
}

export default Dashboard;