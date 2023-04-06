import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";

import { AiFillEdit } from "react-icons/ai";

import Widget from "../../components/fields/Widget";
import Layout from "../../components/Layout/Layout";
import SubHeader from "../../components/Layout/SubHeader";
import Button from "../../components/buttons/Button";
import profile from "../../components/assets/logo.svg";
import Popup from "../../components/Popups/Popup";
import InputPopup from "../../components/Popups/InputPopup";
import ContactInfo from "../../components/fields/ContactInfo.jsx";


const Relation = () => {
        const contacts = [{test: "test"},{test: "test2"},{test: "test3"}]

    const toggleDelete = () => {
        alert("test");
    }

    const [buttonPopup, setButtonPopup] = useState(false);

    const handleChangeRelation = () => {
        alert("Relation changed")
    }

    const handleChangeProfileIcon = () => {
        alert("Changed icon")
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
                        <Icon onClick={() => setButtonPopup(true)}>
                            <AiFillEdit className="icon"/>
                        </Icon>
                        <h1>test</h1>
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
                    <Widget> 
                        <Icon onClick={() => setButtonPopup(true)}>
                            <AiFillEdit className="icon"/>
                        </Icon>
                        <h1>Contacten bedrijf</h1>
                        {
                            contacts.map((contact, index) =>
                            <div key={index}>
                                <ContactInfo key={contact.id} contactName={contact.contactName} />
                            </div>)
                        }
                    </Widget>
                    <Widget gridColumn={"span 2"}/>
                </Grid>
            </Div>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h1>Aanpassen Relatie</h1>
                <ButtonProfileImage onClick={handleChangeProfileIcon}>+</ButtonProfileImage>
                <div>
                    <InputPopup type="text" placeholder="Name.."/>
                    <InputPopup type="text" placeholder="Adress.."/>
                    <InputPopup type="text" placeholder="Postalcode.."/>
                    <InputPopup type="text" placeholder="Place.."/>
                    <InputPopup type="text" placeholder="Tel-Nr.."/>
                    <InputPopup type="email" placeholder="Email.."/>
                    <InputPopup type="text" placeholder="KVK.."/>
                </div>
                <ButtonPos>
                    <Button margin={10} color="primary" onClick={() => setButtonPopup(false)}>Annuleren</Button>
                    <Button margin={10} color="secondary"onClick={handleChangeRelation}>Opslaan</Button>
                </ButtonPos>
            </Popup>
        </Layout>
    )
}
const Grid = styled.div` 
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
    `
const Div = styled.div` 
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
    margin: 20px;
    height: 150px;
    width: 150px;
    border-radius: 150px;
    background-color: ${({theme: {colors} }) => colors.white};
    `
const ItemProfile = styled.div` 
    margin: 20px;
    display: flex;
    border-radius: 64px;
    align-items: center;
    color: ${({theme: {colors} }) => colors.white};
    `
const Icon = styled.a` 
    position: absolute;
    right: 15px;
    `
const ButtonPos = styled.div` 
    display: flex;
    justify-content: space-around;
    `
const ButtonProfileImage = styled.button` 
    margin: 10px;
    height: 100px;
    width: 100px;
    border-radius: 64px;
    border: 2.5px solid ${({theme: {colors} }) => colors.white};
    background-color: ${({theme: {colors} }) => colors.white};
    &:hover {
        filter: brightness(80%);
    }
    `
export default Relation;