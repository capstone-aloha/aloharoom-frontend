import React, { useEffect }from "react";
import styled from "styled-components";
import { Tag, HStack } from '@chakra-ui/react';
import { IoSearchCircleSharp, IoFilterOutline } from "react-icons/io5";

const { kakao } = window;

const PostMapBox = styled.div`
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
    border-color: green;
    border-style: solid;
    display: flex;
    flex-direction: column;
`;

const SearchBox = styled.div`
    position: relative;
    width: 100%;
    height: 50%;
    border-color: yellow;
    border-style: solid;
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
    border-color: brown;
    border-style: solid;
    display: flex;
`;

const TitleSection = styled.div`
    width: 50%;
    border-color: brown;
    border-style: solid;
    display: flex;
    align-items: center;
`;

const HashSection = styled.div`
    width: 50%;
    border-color: brown;
    border-style: solid;
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
    border-color: blue;
    border-style: solid;
    display: flex;
`;

const MapSection = styled.div`
    border-color: blue;
    border-style: solid;
    width: 55%;
    height: 100%;
`;

const PostSection = styled.div`
    border-color: red;
    border-style: solid;
    width: 45%;
    height: 100%;
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

const PostMapSection = () => {
    useEffect(() => {
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    }, [])

    return (
        <PostMapBox>            
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
                <MapSection id="map"/>
                <PostSection/>
            </MapPostBox>
        </PostMapBox>
    );
}

export default PostMapSection;