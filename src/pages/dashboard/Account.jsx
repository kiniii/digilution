import { useEffect, useState } from "react";
import Layout from "../../components/Layout"

const Dashboard = () => {
    return (
        <Layout title="Account">
            <button onClick={() => setCount(count + 1)}>Count</button>
        </Layout>
    )
}

export default Dashboard;