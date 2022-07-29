import React from "react";
import './DetailsContainer.css';
import arrow from '../../assets/arrow.png';
import { Link } from 'react-router-dom';

const DetailsContainer = ({selectedTree, clearSelectedTree}) => {

    console.log('details container selected tree',selectedTree)

    return (
       <>
       <h2>{`About: ${selectedTree.tree_name}`}</h2>
       <h3>{`${selectedTree.tree_name} Zone: Brandon <3`}</h3>
       <section>
         <h5>{`${selectedTree.tree_name}`}</h5>
            {/* IMAGES GO HERE */}
       </section>
       <section>
        <p>Attributes</p>
       </section>
       <section>
        <p>Sun</p>
        <p>Soil</p>
        <p>Growth Speed</p>
        <p>Height</p>
       </section>
      <Link to='/result'>
         <img src={arrow} alt='black arrow pointing to the left' onClick={() => clearSelectedTree()}></img>
       </Link>
       </>
    )
}
export default DetailsContainer;