import { useEffect, useState } from "react";
import React from 'react';
import Layout from "../../Components/Layout";
import Button from "../../Components/Button";
import Widget from "../../fields/Widget";
import styled from "styled-components";

const Dashboard = () => {
    const [count, setCount] = useState(0);

    return (
        <Layout title="Dashboard">
            <Grid>
                <Widget />
                <Widget />
                <Widget />
                <Widget />
                <Widget />
                <Widget />
            </Grid>
        </Layout>
    )
}

const Grid = styled.div`
    display: grid;

`

export default Dashboard;