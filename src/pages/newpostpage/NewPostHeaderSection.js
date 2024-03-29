import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const NewPostHeaderDiv = styled.div`
    height: 4vh;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: ${props => props.fontWeight};
`;

const NewPostHeaderSection = () => {
    const Id = useParams().id;
    const IdExist = Id != null;
    return(
        <NewPostHeaderDiv fontWeight="600">{IdExist ? `방 수정` : `방 생성`}</NewPostHeaderDiv>
    );
}

export default NewPostHeaderSection;