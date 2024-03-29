import React from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom";

const PostButtonDiv = styled.div`
    margin-top: 1vh;
    width: 100%;
    height: 2vh;
    display: flex;
    flex-direction: row-reverse;
`;

const PostButton = styled.button`
    width: 7rem;
    height: 2rem;
    margin-right: 1rem;
    font-size: 1rem;
    border-width: 0.1rem;
    border-style: solid;
    border-color: #47a5fd;
    border-radius: 0.3rem;
    background-color: #47a5fd;
    color: white;
`;

const PostButtonSection = ({PostInfoSubmit, modifyPost}) => {
    const updateID = useParams().id;
    const IdExists = updateID != null;
    return (
        <PostButtonDiv>
            {
                IdExists 
                ? 
                    <PostButton onClick={() => {
                        modifyPost();
                    }}>
                        수정하기
                    </PostButton>
                :
                    <PostButton onClick={() => {
                        PostInfoSubmit();
                    }}>
                        올리기
                    </PostButton>
            }
        </PostButtonDiv>
    )
}

export default PostButtonSection