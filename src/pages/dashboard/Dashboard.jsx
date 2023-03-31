import { useEffect, useState } from "react";
import React from 'react';
import Layout from "../../Components/Layout";
import Widget from "../../fields/Widget";
import styled from "styled-components";

const Dashboard = () => {
    const [count, setCount] = useState(0);

    return (
        <Layout title="Dashboard">
            <Div>
                <GridContainer>
                    <Widget gridColumn={"span 2"}>
                    </Widget>
                    <Widget />
                    <Widget />
                    <Widget />
                    <Widget />
                </GridContainer>
            </Div>
        </Layout>
    )
}

const GridContainer = styled.div`
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