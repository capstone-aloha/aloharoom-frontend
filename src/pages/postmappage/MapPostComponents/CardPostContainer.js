import styled from "styled-components";

const CardPostContainer = styled.div`
    width: 47.5vw;
    height: 98%;
    margin-top: 0.1vh;
    margin-left: 1vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
    gap: 1vw;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 0.5rem;          /* 스크롤바의 너비 */
    }

    &::-webkit-scrollbar-thumb {
        height: 1%;             /* 스크롤바의 길이 */
        background: #bbbbbb;    /* 스크롤바의 색상 */
        border-radius: 1rem;
    }
    &::-webkit-scrollbar-track {
        background: white;      /*스크롤바 뒷 배경 색상*/
    }
`;

export default CardPostContainer;