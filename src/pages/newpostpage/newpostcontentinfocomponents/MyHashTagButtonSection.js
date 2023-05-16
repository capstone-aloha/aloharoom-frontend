import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import HashTagButton from '../../HashTagButton';

const MyHashTagButtonDiv = styled.div`
    width: 90%;
    min-height: 4.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const MyHashTagButtonSection = ({ myHashtags }) => {
    const [selectedMyHashTagButtons, setSelectedMyHashTagButtons] = useState([]);
    const handleMyHashTagButtonClick = (index) => {
        if (selectedMyHashTagButtons.includes(index)) {
        setSelectedMyHashTagButtons(
            selectedMyHashTagButtons.filter((i) => i !== index)
        );
        } else {
        setSelectedMyHashTagButtons([...selectedMyHashTagButtons, index]);
        }
    };
    return (
        <MyHashTagButtonDiv>
            {myHashtags.map((data, idx) => (
                <HashTagButton
                    key={idx}
                    selected={selectedMyHashTagButtons.includes(data)}
                    onClick={() => handleMyHashTagButtonClick(data)}
                >
                    {data}
                </HashTagButton>
            ))}
        </MyHashTagButtonDiv>
    );
}

export default MyHashTagButtonSection;