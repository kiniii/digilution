import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";

import Widget from "../../components/fields/Widget";
import Layout from "../../components/Layout/Layout"

const Dashboard = () => {
    const [count, setCount] = useState(0);

    return (
        <Layout title="Dashboard">
            <Div>
                <Grid>
                    <Widget gridColumn={"span 2"}>
                        <h1>Test</h1>
                    </Widget>
                    <Widget />
                    <Widget />
                    <Widget />
                    <Widget />
                </Grid>
            </Div>
            
        </Layout>
    )
}
const Grid = styled.div` 
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);

    `
const Div = styled.div` 
    grid-column-start: 2;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 8;
    margin: 1.5rem;
    right: 0%;
    bottom: 0%;
    `
export default Dashboard;