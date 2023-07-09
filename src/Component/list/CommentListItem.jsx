import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: felx-start;
    justify-content: center;
    border: 1px solid grey;
    border-redius: 8px;
    cursor: pointer;
    background: white;
    :hovor {
        background: lightgrey;
    }
`;

const ContentText = styled.p`
    font-size: 14px;
`;

function CommentListItem(props) {
    const {comment} = props;
    return (
        <Wrapper>
            <ContentText>{comment.title}</ContentText>
        </Wrapper>
    );
}

export default CommentListItem;
