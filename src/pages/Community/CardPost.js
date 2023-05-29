import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import styled from "styled-components";
import axios from "axios";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import baseURL from "../api/baseURL";

const Card2 = styled.div`
  min-width: 90%;
  height: 10rem;
  border-style: solid;
  border-color: #bbbbbb;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    border-color: #47a5fd;
  }
`;
const CardBox2 = styled.div`
  position: absolute;
  top: 13rem;
  left: 18.5vw;
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  overflow: auto;
  gap: 2rem;
`;

const DateDiv = styled.div`
  width: 88%;
  height: 2rem;
`;

const DateSpan = styled.span`
  margin-left: 300px;
  font-size: 0.8rem;
  color: #bbbbbb;
  line-height: 2rem;
`;

const TitleDiv = styled.div`
  width: 88%;
  height: 2.5rem;
  display: flex;
  align-items: center;
`;

const TitleSpan = styled.span`
  margin-left: 300px;
  font-size: 1.1rem;
  font-weight: 600;
`;

const CardImageDiv = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
`;

const CardImage = styled.img`
  width: 15%;
  height: 100%;
`;

const CardPost = ({ communityId }) => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null); // 클릭한 게시물의 인덱스를 저장할 변수

  const [scrollTop, setScrollTop] = useState(0);
  const location = useLocation();
  const code = 0; // 1이 아닌 다른 값으로 변경

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `${baseURL}/api/communityboard/code/${code}`
      );
      setData(result.data);
    };
    fetchData();
  }, [communityId, code]); // code를 의존성 배열에 추가

  const handleLinkClick = (event, message) => {
    console.log(message);
  };

  return (
    <CardBox2>
      {data.map((post, index) => (
        <Link to={`../CommunityInfoPage/${post.communityId}`} key={post.code}>
          <Card2
            key={post.code}
            onClick={(event) => {
              setCurrentIndex(index); // 클릭한 게시물의 인덱스를 저장
              handleLinkClick(
                event,
                `../CommunityInfoPage/${post.communityId}`
              );
            }}
          >
            <DateDiv>
              <DateSpan>{post.createdAt}</DateSpan>
            </DateDiv>
            <TitleDiv>
              <TitleSpan>{post.title}</TitleSpan>
            </TitleDiv>
            <CardImageDiv>
              <CardImage src={post.imgUrls} />
              {/* <CardImage src={post.imgUrls[0]} /> */}
            </CardImageDiv>
          </Card2>
        </Link>
      ))}
    </CardBox2>
  );
};
export default CardPost;
