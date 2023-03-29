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
                    <Widget gridColumn={"span 2"}/>
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
    margin-top: 7%;
    margin-left: 24%;
    margin-right: 2%;
    right: 0%;
    bottom: 0%;
    `
export default Dashboard;