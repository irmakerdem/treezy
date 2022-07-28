import React from "react";
import './Card.css';
import { Link } from 'react-router-dom';


const Card = ({id, name, mainImage, growingZone}) => {
    return (
        <>
        <p>{name}</p>
        <Link to={'trees/' + id}>
            <img src={mainImage}></img>
        </Link>
        </>
    )
}
export default Card;