import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout"

const Dashboard = () => {
    const [count, setCount] = useState(0);

    return (
        <Layout title="Dashboard">
            <button onClick={() => setCount(count + 1)}>Count</button>
        </Layout>
    )
}

export default Dashboard;