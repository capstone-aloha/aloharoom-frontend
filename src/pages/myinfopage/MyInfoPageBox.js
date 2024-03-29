import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MyPageTitle from "./myinfopagecomponents/MyInfoPageTitle";
import MyInfoPageContent from "./myinfopagecomponents/MyInfoPageContent";
import MyProfileUpdateModal from "../modal/MyProfileUpdateModal";
import axios from "axios";
import baseURL from "../api/baseURL";

const MyPageBoxContainer = styled.div`
    position: relative;
    /* 기준이 되는 조상 페이지 */
    margin-top: 9vh;
    /* 위 간격 */
    max-width: 35vw;
    /* 좌우 간격 */
    height: 65vh;
    //min-height: 35vh;
    //max-height: 68vh;
    /* min/max-height = 크기고정 */
    
    left: 50%;
    transform: translate(-50%, 5%);
    /* 중앙고정 */

    background-color: #ffffff;
    border: 2px solid;
    border-radius: 1.8rem;
    border-color: #47A5FD;
    /* 페이지 디자인 */
    display: flex;
    flex-direction: column;
`;

const MyInfoUpdateButton = styled.button`
    width: auto;
    height: 2rem;
    font-size: 0.9rem;
    color: #a0a0a0;
    background-color: #E2E2E2;
    border-style: none;
    border-radius: 0.5rem;
    margin-top: 15px;
    cursor: pointer;
`;

const MyPageBox = ({
    isMyProfileUpdateModalOpen,
    setIsMyProfileUpdateModalOpen,
    responseData,
    myHashtags,
    myHomeHashtags,
    likeHashtags,
    likeHomeHashtags,
    fetchMyInfoData
}) => {
    const showMyProfileUpdateModal = () => {setIsMyProfileUpdateModalOpen(true);}
    const handleMyProfileUpdateModalCancel = () => {setIsMyProfileUpdateModalOpen(false);}
    return (
        <>
        {isMyProfileUpdateModalOpen ? 
            <MyProfileUpdateModal
                isMyProfileUpdateModalOpen={isMyProfileUpdateModalOpen}
                setIsMyProfileUpdateModalOpen={setIsMyProfileUpdateModalOpen}
                handelCancel={handleMyProfileUpdateModalCancel}
                fetchMyInfoData={fetchMyInfoData}
            />
        :
            <></>
        }
        <MyPageBoxContainer>
            <MyInfoUpdateButton 
                onClick={() => {
                    showMyProfileUpdateModal();
                }}
                style={{ position: "absolute", top:"1vh", right: "1vw"}}
            >
                내 정보 수정
            </MyInfoUpdateButton>
            <MyPageTitle title="내 정보"/>
            <MyInfoPageContent
                responseData={responseData}
                myHashtags={myHashtags}
                myHomeHashtags={myHomeHashtags}
                likeHashtags={likeHashtags}
                likeHomeHashtags={likeHomeHashtags}
                fetchMyInfoData={fetchMyInfoData}
            />
        </MyPageBoxContainer>
        </>
    );
}

export default MyPageBox;