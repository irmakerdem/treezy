import React from "react";
import './Card.css';
import { Link } from 'react-router-dom';


const Card = ({id, name, mainImage, growingZone, changeSelectedTree}) => {
    return (
        <>
        <p>{name}</p>
        <Link to={'/' + id}>
            <img src={mainImage} id={id} onClick={() => changeSelectedTree(id)}></img>
        </Link>
        </>
    )
}
export default Card;