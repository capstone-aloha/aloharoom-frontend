import React from "react";
import styled from "styled-components";

const RecentViewPageTitleContainer = styled.div`
    max-width: 40vw;
    min-height: 8vh;
    display : flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    border-style: none none solid none;
    border-color: #bbbbbb;
    border-width: 0.05rem;
`;

const RecentViewPageTitle = ({title}) => {
    return (
        <RecentViewPageTitleContainer>
            <div style={{fontWeight: "600"}}>{title}</div>
        </RecentViewPageTitleContainer>
    );
}

export default RecentViewPageTitle;