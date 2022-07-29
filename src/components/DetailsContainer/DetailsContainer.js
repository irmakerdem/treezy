import React from "react";
import './DetailsContainer.css';
import arrow from '../../assets/arrow.png';
import { Link } from 'react-router-dom';

const DetailsContainer = ({selectedTree, clearSelectedTree}) => {

   console.log('details container selected tree',selectedTree)

   const createHTML = () => {
      return {__html: selectedTree.overview_description};
   }

    return (
       <>
       <h2>{`About: ${selectedTree.tree_name}`}</h2>
       <p>{`Botanical Name: ${selectedTree.botanical_name}`}</p><br></br>
       <h3>{`${selectedTree.tree_name} Growing Zone: ${selectedTree.growing_zone}`}</h3>
       <section className='detailImages'>
         { selectedTree.main_tree_image === 'N/A' ? null : <img src={selectedTree.main_tree_image}  /> }<br></br>
         { selectedTree.tree_image_1 === 'N/A' ? null : <img src={selectedTree.tree_image_1} /> }<br></br>
         { selectedTree.tree_image_2 === 'N/A' ? null : <img src={selectedTree.tree_image_2} /> }<br></br>
         { selectedTree.tree_image_3 === 'N/A' ? null : <img src={selectedTree.tree_image_3} /> }<br></br>
         { selectedTree.tree_image_4 === 'N/A' ? null : <img src={selectedTree.tree_image_4} /> }<br></br>
      </section>
      <section>
      <p>📝 Attributes</p>
        <p dangerouslySetInnerHTML={ createHTML() } />
       </section>
       <section>
        <p>{`☀️ Sun Preference: ${selectedTree.sun_preference}`}</p><br></br>
        <p>{`🪴 Soil Preference: ${selectedTree.soil_preference}`}</p><br></br>
        <p>{`🐢 Growth Speed: ${selectedTree.growth_speed}`}</p><br></br>
        <p>{`🪜 Mature Height: ${selectedTree.mature_height}`}</p><br></br>
        <p>{`🌳 Mature Spread: ${selectedTree.mature_speed}`}</p><br></br>
        <p>{`🌺 Flower Color: ${selectedTree.flower_color}`}</p><br></br>
        <p>{`🍃 Foliage Color: ${selectedTree.foliage_color}`}</p><br></br>
        <p>{`🍂 Fall Color: ${selectedTree.fall_color}`}</p><br></br>
        <p>{`🐝 Pollinator Friendly: ${selectedTree.pollinator_friendly}`}</p><br></br>
        <a href={selectedTree.outgoing_link}>Find more info at Nature Hills</a><br></br>
       </section>
      <Link to='/result'>
         <img src={arrow} alt='black arrow pointing to the left' onClick={() => clearSelectedTree()}></img>
       </Link>
       </>
    )
}
export default DetailsContainer;