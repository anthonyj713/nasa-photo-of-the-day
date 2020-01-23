import React from 'react';

function Body(props) {
    return(
        <div className = "bodyDiv">
        <img src ={props.bodyData.url} alt = "NASA space"></img>
        <p>{props.bodyData.explanation}</p>
        </div>
    )
}

export default Body;