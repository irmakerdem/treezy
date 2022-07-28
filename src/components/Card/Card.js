import React from "react";
import './Card.css'


const Card = ({key, name, mainImage, growingZone}) => {
    return (
        <>
        <p>{name}</p>
        <img src={mainImage}></img>
        </>
    )
}
export default Card;