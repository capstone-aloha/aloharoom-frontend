import React from "react";
import styled from "styled-components";

const NotificationModalDiv = styled.div`
    position: absolute;
    z-index: 5;
    width: 20rem;
    height: 20rem;
    background-color: white;
    right: 14vw;

    border-style: solid;
    border-width: 0.1rem;
    border-color: #47a5fd;
    border-radius: 0.5rem;
`;

const NotificationModalHeaderDiv = styled.div`
    width: 20rem;
    height: 3rem;
    display: flex;
    flex-direction: row;
`

const NotificationTitleDiv = styled.div`
    width: 10rem;
    height: 3rem;
`;

const NotificationTitle = styled.div`
    margin-top: 0.7rem;
    margin-left: 0.5rem;
    font-weight: 400;
    font-size: 1.5rem;
`;

const NotificationModalCloseButtonDiv = styled.div`
    width: 10rem;
    height: 2rem;
    display: flex;
    flex-direction: row-reverse;
`;

const NotificationModalCloseButton = styled.button`
    margin-right: 0.5rem;
    font-size: 1.5rem;
    color: #47a5fd;
    background-color: white;
    border-radius: 0.5rem;
    border-style:none;
`;

const NotificationModal = ({ModalClose = f => f}) => {
    return (
        <NotificationModalDiv>
            <NotificationModalHeaderDiv>
                <NotificationTitleDiv>
                    <NotificationTitle>알림</NotificationTitle>
                </NotificationTitleDiv>
                <NotificationModalCloseButtonDiv>
                    <NotificationModalCloseButton onClick={ModalClose}>x</NotificationModalCloseButton> 
                </NotificationModalCloseButtonDiv>
            </NotificationModalHeaderDiv>
        </NotificationModalDiv>
    );
}

export default NotificationModal;