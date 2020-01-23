import React from 'react';

function Header(props) {
    return(
        <h1>
        <div>{props.headerData.title}</div>
        <div>{props.headerData.date}</div>
        </h1>
    )
}

export default Header;