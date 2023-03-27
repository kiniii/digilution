import styled from "styled-components";
import React from "react";
import ButtonBlack from "../buttons/ButtonBlack";
import ButtonOrange from "../buttons/Button";

const NewRelation = () => {
    const inputName = () => {
        alert("name")
    }

    const handleBack = () => {

    }

    const handleNewRelation = () => {

    }

    return (
        <PopupStyle>
            <InputPos>
                <Input type="text" value={inputName} placeholder="Name..."/>
                <Input type="text" value={inputName} placeholder="Adress..."/>
                <Input type="text" value={inputName} placeholder="Postalcode..."/>
                <Input type="text" value={inputName} placeholder="Place..."/>
                <Input type="text" value={inputName} placeholder="Tel-nr..."/>
                <Input type="email" value={inputName} placeholder="Mail..."/>
                <Input type="text" value={inputName} placeholder="KVK..."/>
            </InputPos>
            <ButtonPos>
                <ButtonBlack onClick={handleBack}/>
                <ButtonOrange onClick={handleNewRelation}/>
            </ButtonPos>
        </PopupStyle>
    )
}

const PopupStyle = styled.div` 
    background-color: ${({theme: {colors} }) => colors.darkBackground};
    width: 500px;
    height: 720px;
    `
const ButtonPos = styled.div` 
    position: absolute;
    top: 620px;
    `
const Input = styled.input` 
    position: absolute;
    left: 75px; 
    `
export default NewRelation;