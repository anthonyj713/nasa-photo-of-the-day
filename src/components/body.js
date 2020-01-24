import React from 'react';
import styled from 'styled-components';

const TextDiv = styled.div`
    background-color: black;
    width:80%;
    margin: 0 auto;
`

const ExplanationText = styled.p`
    color: #5d7fb9;
    font-size: 1.4rem;
    font-family: "Titillium Web", "Helvetica Neue", "Helvetica", Arial, sans-serif;
`

function Body(props) {
    return(
        <div>
        <img src ={props.bodyData.url} alt = "NASA space"></img>
        <TextDiv>
        <ExplanationText>{props.bodyData.explanation}</ExplanationText>
        </TextDiv>
        </div>
    )
}

export default Body;