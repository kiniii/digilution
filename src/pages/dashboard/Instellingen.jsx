import { useEffect, useState } from "react";
import Layout from "../../components/Layout"

const Dashboard = () => {
    return (
        <Layout title="Instellingen">
            <button onClick={() => setCount(count + 1)}>Count</button>
        </Layout>
    )
}

export default Dashboard;