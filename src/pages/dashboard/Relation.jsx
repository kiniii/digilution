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
import Box from "../../components/Layout/Box";
import { Link } from "react-router-dom";

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
                <NavItem to="/Relation">Overzicht</NavItem>
                <NavItem to="/RelationProjects">Projecten</NavItem>
                <NavItem to="/Invoices">Facturen</NavItem>
                <NavItem to="/Documentation">Documentatie</NavItem>
                <Button color="primary" onClick={toggleDelete}>Verwijder</Button>
            </SubHeader>
            <Box m="1.5rem" rigth="0%" bottom="0%">
                <Box display="grid" gridGap="1.5rem" gridTemplateColumns={"1fr 1fr 1fr"}>
                    <Widget >
                        <Box as="a" position="absolute" rigth={15} onClick={() => setButtonPopup(true)}>
                            <AiFillEdit className="icon"/>
                        </Box>
                        <h1>test</h1>
                        <Box as="img" m={20} height={150} width={150} borderRadius={150} backgroundColor="white" src={profile} alt="" />
                        <Box m={20} display="flex" borderRadius={64} alignItems="center" color="white">
                            <p>Adres: </p>
                            <p>{}</p>
                        </Box>
                        <Box m={20} display="flex" borderRadius={64} alignItems="center" color="white">
                            <p>Tel-nr: </p>
                            <p>{}</p>
                        </Box>
                        <Box m={20} display="flex" borderRadius={64} alignItems="center" color="white">
                            <p>Mail: </p>
                            <p>{}</p>
                        </Box>
                        <Box m={20} display="flex" borderRadius={64} alignItems="center" color="white">
                            <p>KVK: </p>
                            <p>{}</p>
                        </Box>
                    </Widget>
                    <Widget gridColumn={"span 2"}/>
                    <Widget> 
                        <Box as="a" position="absolute" rigth={15} onClick={() => setButtonPopup(true)}>
                            <AiFillEdit className="icon"/>
                        </Box>
                        <h1>Contacten bedrijf</h1>
                        {
                            contacts.map((contact, index) =>
                            <div key={index}>
                                <ContactInfo key={contact.id} contactName={contact.contactName} />
                            </div>)
                        }
                    </Widget>
                    <Widget gridColumn="span 2"/>
                </Box>
            </Box>

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
                <Box display="flex" justifyContent="space-around">
                    <Button margin={10} color="primary" onClick={() => setButtonPopup(false)}>Annuleren</Button>
                    <Button margin={10} color="secondary"onClick={handleChangeRelation}>Opslaan</Button>
                </Box>
            </Popup>
        </Layout>
    )
}

const NavItem = styled(Link)` 
    padding: 20px 0px;
    text-decoration: none;
    align-items: center;
    text-align: center;
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