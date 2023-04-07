import React from "react";
import Box from "../../components/Layout/Box";

import Widget from "../../components/fields/Widget";
import Layout from "../../components/Layout/Layout"

const Dashboard = () => {
    return (
        <Layout title="Dashboard">
            <Box m="1.5rem" rigth="0%" bottom="0%">
                <Box display="grid" gridGap="1.5rem" gridTemplateColumns={"1fr 1fr 1fr"}>
                    <Widget gridColumn={"span 2"}>
                        <h1>Test</h1>
                    </Widget>
                    <Widget />
                    <Widget />
                    <Widget />
                    <Widget />
                </Box>
            </Box>
        </Layout>
    )
}

export default Dashboard;