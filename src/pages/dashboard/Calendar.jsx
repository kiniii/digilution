import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout"

const Kalender = () => {
    return (
        <Layout title="Kalender">
            <button onClick={() => setCount(count + 1)}>Count</button>
        </Layout>
    )
}

export default Kalender;