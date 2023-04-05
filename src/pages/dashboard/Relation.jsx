import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";

import Widget from "../../components/fields/Widget";
import Layout from "../../components/Layout/Layout";
import SubHeader from "../../components/Layout/SubHeader";
import Button from "../../components/buttons/Button";
import profile from "../../components/assets/logo.svg";

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
                        <Profile src={profile} alt="" />
                        <ItemProfile>
                            <p>Adres: </p>
                            <p>{}</p>
                        </ItemProfile>
                        <ItemProfile>
                            <p>Tel-nr: </p>
                            <p>{}</p>
                        </ItemProfile>
                        <ItemProfile>
                            <p>Mail: </p>
                            <p>{}</p>
                        </ItemProfile>
                        <ItemProfile>
                            <p>KVK: </p>
                            <p>{}</p>
                        </ItemProfile>
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
const Profile = styled.img` 
    margin: 10px;
    height: 100px;
    width: 100px;
    border-radius: 64px;
    background-color: ${({theme: {colors} }) => colors.white};
    `
const ItemProfile = styled.div` 
    margin: 10px;
    display: flex;
    border-radius: 64px;
    align-items: center;
    color: ${({theme: {colors} }) => colors.white};
    `
export default Relation;