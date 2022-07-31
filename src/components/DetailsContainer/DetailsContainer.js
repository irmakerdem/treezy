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
         <div className="details-top">
            <h2>{`${selectedTree.tree_name}`}</h2>
            <p>{`Botanical Name: ${selectedTree.botanical_name}`}</p>
            <h3>{`Growing Zone: ${selectedTree.growing_zone}`}</h3>
            <section className='detail-images'>
               <div className="main-image">
                  { selectedTree.main_tree_image === 'N/A' ? null : <img src={selectedTree.main_tree_image}  /> }
               </div>
               <div className="small-images">
                  { selectedTree.tree_image_1 === 'N/A' ? null : <img src={selectedTree.tree_image_1} /> }<br></br>
                  { selectedTree.tree_image_2 === 'N/A' ? null : <img src={selectedTree.tree_image_2} /> }<br></br>
                  { selectedTree.tree_image_3 === 'N/A' ? null : <img src={selectedTree.tree_image_3} /> }<br></br>
                  { selectedTree.tree_image_4 === 'N/A' ? null : <img src={selectedTree.tree_image_4} /> }<br></br>
               </div>
            </section>
         </div>
         <div className="details-middle">
            {/* <section className="attributes-container"> */}
               <p className="attributes-title">📝 Attributes</p>
               <p dangerouslySetInnerHTML={ createHTML() } />
            {/* </section> */}
         </div>
         <div className="details-bottom">
            <section className="more-about">
               <h4 className="about-this-tree">More About This Tree</h4>
               <p className="about-this-tree">{`☀️ Sun Preference: ${selectedTree.sun_preference} ☀️`}</p>
               <p className="about-this-tree">{`🪴 Soil Preference: ${selectedTree.soil_preference} 🪴`}</p>
               <p className="about-this-tree">{`🐢 Growth Speed: ${selectedTree.growth_speed} 🐢`}</p>
               <p className="about-this-tree">{`🪜 Mature Height: ${selectedTree.mature_height} 🪜`}</p>
               <p className="about-this-tree">{`🌳 Mature Spread: ${selectedTree.mature_speed} 🌳`}</p>
               <p className="about-this-tree">{`🌺 Flower Color: ${selectedTree.flower_color} 🌺`}</p>
               <p className="about-this-tree">{`🍃 Foliage Color: ${selectedTree.foliage_color} 🍃`}</p>
               <p className="about-this-tree">{`🍂 Fall Color: ${selectedTree.fall_color} 🍂`}</p>
               <p className="about-this-tree">{`🐝 Pollinator Friendly: ${selectedTree.pollinator_friendly} 🐝`}</p><br></br>
               <a className="about-this-tree" href={selectedTree.outgoing_link}>Find more info at Nature Hills</a><br></br>
            </section>
            <Link to='/result'>
               <img src={arrow} alt='black arrow pointing to the left' onClick={() => clearSelectedTree()}></img>
            </Link>
         </div>
       </>
    )
}
export default DetailsContainer;