import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ id, name, mainImage, changeSelectedTree }) => {
  return (
    <div className='card'>
      <p className='tree-name'>{name}</p>
        <Link to={'trees/' + id}>
          <img className='tree-image' src={mainImage} id={id} alt={`${name} photo`} onClick={() => changeSelectedTree(id)}></img>
        </Link>
    </div>
  )
}

export default Card;