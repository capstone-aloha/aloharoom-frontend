import React, { useState } from 'react'
import styled from 'styled-components';
import PostInfoFlexDiv from '../PostInfoFlexDiv';
import PostInfoSpan from '../PostInfoSpan';
import UserProfileImg from '../UserProfileImg';

const CommentInput = styled.input`
    margin-left: 0.5rem;
    border-color: #47A5FD;
    border-radius: 0.5rem;
    width: 80%;
    height: 2rem;
`;

const CommentWriteButton = styled.button`
    margin-left: 3%;
    width: 10%;
    height: 2rem;
    font-size: 1rem;
    border-width: 0.1rem;
    border-style: solid;
    border-radius: 0.3rem;
    background-color: white;
    border-color: #47A5FD;
    color: #47A5FD;
`;

const WriteReplyComment = ({
    makeCommentRequest,
    boardId,
    clickTargetUserId,
    clickTargetContent,
    clickGroupId,
    myProfileURL
}) => {
    const [inputValue, setInputValue] = useState();
    return (
        <PostInfoFlexDiv width="85%" minHeight="6rem" flexDirection="column" marginTop="0.5rem" marginLeft="15%" borderStyle="solid" borderRadius="0.5rem" borderColor="#47a5fd">
            <PostInfoFlexDiv width="100%" minHeight="3rem" alignItems="center">
                <UserProfileImg marginLeft="0.7rem" borderRadius="10rem" width="2.5rem" height="2.5rem" src={myProfileURL}/>
                <PostInfoSpan color="#47a5fd" fontSize="1.2rem" marginLeft="0.5rem">{localStorage.getItem('nickname')}</PostInfoSpan>
            </PostInfoFlexDiv>
            <PostInfoFlexDiv width="100%" minHeight="3rem" alignItems="center">
                <CommentInput type="text" value={inputValue} placeholder="대댓글을 입력하세요." onChange={(e) => { setInputValue(e.target.value)}}/>
                <CommentWriteButton
                    onClick={() =>{ 
                        console.log('clickTargetUserId', clickTargetUserId);
                        console.log('clickTargetContent', clickTargetContent);
                        console.log('clickGroupId', clickGroupId);
                        setInputValue("");
                        makeCommentRequest(localStorage.getItem('userId'), clickTargetUserId, boardId, 0, inputValue, clickTargetContent, 1, clickGroupId);
                    }}
                >
                    쓰기
                </CommentWriteButton>
            </PostInfoFlexDiv>
        </PostInfoFlexDiv>
    );
}

export default WriteReplyComment;