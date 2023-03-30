import React from "react";
import styled from "styled-components";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
//import '../../../style/HashTagSwiper.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HashSection = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row-reverse;
    align-content: center;
`;

const HashTagSwiperDiv = styled.div`
    margin-top: 1.5rem;
    margin-right : 1rem;
    fontWeight: 800;
`;

const HashTagButton = styled.button`
    background-color: white;
    width: 7.5rem;
    height: 2rem;
    border: 2px solid #bbbbbb;
    border-radius: 1rem;
    color: #bbbbbb;
    font-weight: 500;
    font-size: 1.2rem;
`;

const SwiperStyle = {
    width: "43vw",
    border: "5px solid black"
}

const HashTags = () => {
    return (
        <HashSection>
            <HashTagSwiperDiv>
                <Swiper
                    style={SwiperStyle}
                    // install Swiper modules
                    modules={[Navigation, Scrollbar, Pagination, A11y]}
                    spaceBetween={1}
                    slidesPerView={5}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                > 
                    <SwiperSlide>
                        <HashTagButton>#주차가능</HashTagButton>
                    </SwiperSlide>
                    <SwiperSlide>
                        <HashTagButton>#주차가능</HashTagButton>
                    </SwiperSlide>
                    <SwiperSlide>
                        <HashTagButton>#주차가능</HashTagButton>
                    </SwiperSlide>
                    <SwiperSlide>
                        <HashTagButton>#주차가능</HashTagButton>
                    </SwiperSlide>
                    <SwiperSlide>
                        <HashTagButton>#주차가능</HashTagButton>
                    </SwiperSlide>
                    <SwiperSlide>
                        <HashTagButton>#주차가능</HashTagButton>
                    </SwiperSlide>
                </Swiper>
            </HashTagSwiperDiv>
        </HashSection>
    );
}


export default HashTags;