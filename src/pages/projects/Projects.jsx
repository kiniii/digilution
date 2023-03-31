import { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import React from "react";
import styled from "styled-components";
import Widget from "../../fields/Widget";

const Projects = () => {
    const [count, setCount] = useState(0);

    return (
        <Layout title="Projecten">
            <Div>    
                <Grid>
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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
`

const Div = styled.div`

`

export default Projects;