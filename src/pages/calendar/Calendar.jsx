import { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import React from "react";
import styled from "styled-components";
import Widget from "../../fields/Widget";

const Calendar = () => {
    const [count, setCount] = useState(0);

    return (
        <Layout title="Kalender">
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

export default Calendar;