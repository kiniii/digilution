import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";

import Widget from "../../components/fields/Widget";
import Layout from "../../components/Layout/Layout";
import SubHeader from "../../components/Layout/SubHeader";
import Button from "../../components/buttons/Button";

const Relation = () => {
    const toggleDelete = () => {
        alert("test");
    }

    return (
        <Layout title="Digilution">
            <SubHeader>
                <NavItem href="/Relation">Overzicht</NavItem>
                <NavItem href="/RelationProjects">Projecten</NavItem>
                <NavItem href="/Invoices">Facturen</NavItem>
                <NavItem href="/Documentation">Documentatie</NavItem>
                <Button color="primary" onClick={toggleDelete}>Verwijder</Button>
            </SubHeader>
            <Div>
                <Grid>
                    <Widget >
                        <h1>Test</h1>
                    </Widget>
                    <Widget gridColumn={"span 2"}/>
                    <Widget />
                    <Widget gridColumn={"span 2"}/>
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
    grid-row-start: 3;
    grid-row-end: 8;
    margin: 1.5rem;
    right: 0%;
    bottom: 0%;
    `
const NavItem = styled.a` 
    padding: 20px 0px;
    text-decoration: none;
    align-items: center;
    text-align: center;
    `
export default Relation;