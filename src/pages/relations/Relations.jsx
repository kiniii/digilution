import { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import React from "react";
import styled from "styled-components";
import Widget from "../../fields/Widget";

const Relations = () => {
    const [count, setCount] = useState(0);

    return (
        <Layout title = "Relaties">
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

export default Relations;