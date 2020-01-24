import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    background-color: black;

`;

const HeaderTitle = styled.h1`
    color: #5d7fb9;
    font-size: 3.2rem;
    font-family: "Titillium Web", "Helvetica Neue", "Helvetica", Arial, sans-serif;
    `;

const Date = styled.h2`
    color: #5d7fb9;
    font-size: 2.4rem;
    font-family: "Titillium Web", "Helvetica Neue", "Helvetica", Arial, sans-serif;
`;

function Header(props) {
    return(
        <HeaderContainer>
        <HeaderTitle>Picture of the Day:  {props.headerData.title}</HeaderTitle>
        <Date>{props.headerData.date}</Date>
        </HeaderContainer>
    )
}

export default Header;