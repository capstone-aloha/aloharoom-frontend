import React, { useEffect }from "react";

import styled from "styled-components";
import { Tag, HStack } from '@chakra-ui/react';
import { IoSearchCircleSharp, IoFilterOutline } from "react-icons/io5";
import { Map } from 'react-kakao-maps-sdk';

const PostMapContentContainer = styled.div`
    position: relative;
    width: 100%;
    height: 50rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

const SearchHashTagBox = styled.div`
    position: absolute;
    top: 0.1rem;
    width: 99.5%;
    height: 20%;
    display: flex;
    flex-direction: column;
`;

const SearchBox = styled.div`
    position: relative;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    z-index: 1;
`;

const SearchInput = styled.input`
    width: 18%;
    height: 40%;
    border-style: solid;
    border-radius: 2rem;
    border-color: #47A5FD;
    z-index: 1;
`;

const HashTagBox = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
`;

const TitleSection = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
`;

const HashSection = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row-reverse;
    align-content: center;
`;

const TitleSpan = styled.span`
    margin-left: 1rem;
    font-weight: 700;
    font-size: 1.7rem;
`;


const MapPostBox = styled.div`
    position: absolute;
    top: 10.1rem;
    width: 99.5%;
    height: 82%;
    display: flex;
`;

const kakaoMapStyle = {
    width: "55%",
    height: "100%"
};

const PostSection = styled.div`
    border-width: 0.1rem;
    border-style: solid;
    border-color: #47A5FD;
    width: 45%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PostCardSection = styled.div`
    width: 90%;
    height: 95%;
    margin-left: 6.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 0.5rem;          /* 스크롤바의 너비 */
    }

    &::-webkit-scrollbar-thumb {
        height: 1%;             /* 스크롤바의 길이 */
        background: #47A5FD;    /* 스크롤바의 색상 */
        border-radius: 1rem;
    }

    &::-webkit-scrollbar-track {
        background: white;      /*스크롤바 뒷 배경 색상*/
    }
`;

const PostCard = styled.div`
    width: 25%;
    height: 15rem;
    border-style: solid;
    border-color: #47A5FD;
    border-radius: 1rem;
`;

const FilterIconStyle = {
    marginRight : "2rem",
    marginLeft : "1rem",
    color: "#47A5FD"
}

const SearchIconStyle = {
    position: "absolute",
    right: "2rem",
    zIndex : "3",
    marginRight : "3rem",
    marginLeft : "1rem",
    color: "#47A5FD"
}

const TagTotalStyle = {
    marginRight : "2rem",
    fontWeight : "800"
}

const PostMapContent = () => {
    return (
        <PostMapContentContainer>            
            <SearchHashTagBox>
                <SearchBox>
                    <IoFilterOutline size={30} style={FilterIconStyle}/>
                    <IoSearchCircleSharp size={30} style={SearchIconStyle}/>
                    <SearchInput type="text"/>
                </SearchBox>
                <HashTagBox>
                    <TitleSection>
                        <TitleSpan>지도에서 위치 찾기</TitleSpan>
                    </TitleSection>
                    <HashSection>
                        <HStack
                            spacing={25} 
                            style={TagTotalStyle}>
                            <Tag>#해시태그1</Tag>
                            <Tag>#해시태그2</Tag>
                            <Tag>#해시태그3</Tag>
                            <Tag>#해시태그4</Tag>
                            <Tag>#해시태그5</Tag>
                        </HStack>
                    </HashSection>
                </HashTagBox>
            </SearchHashTagBox>
            <MapPostBox>
                <Map 
                    center={{ lat: 33.5563, lng: 126.79581 }}   // 지도의 중심 좌표
                    style={kakaoMapStyle} // 지도 크기
                    level={3}                                   // 지도 확대 레벨
                />
                <PostSection>
                    <PostCardSection>
                        <PostCard/>
                        <PostCard/>
                        <PostCard/>
                        <PostCard/>
                        <PostCard/>
                        <PostCard/>
                        <PostCard/>
                        <PostCard/>
                        <PostCard/>
                        <PostCard/>
                        <PostCard/>
                    </PostCardSection>
                </PostSection>
            </MapPostBox>
        </PostMapContentContainer>
    );
}

export default PostMapContent;