import React from "react";
import './Card.css';
import { Link } from 'react-router-dom';


const Card = ({id, name, mainImage, growingZone, changeSelectedTree}) => {
    return (
        <div className="card">
            <p className="tree-name">{name}</p>
            <Link to={'trees/' + id}>
                <img src={mainImage} id={id} onClick={() => changeSelectedTree(id)}></img>
            </Link>
        </div>
    )
}
export default Card;