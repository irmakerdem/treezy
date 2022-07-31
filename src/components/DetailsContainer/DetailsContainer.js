import React from "react";
import './DetailsContainer.css';
import woodenArrow from '../../assets/wooden-arrow.png';
import { Link } from 'react-router-dom';

const DetailsContainer = ({selectedTree, clearSelectedTree}) => {

   window.scroll(0,0);

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
                  { selectedTree.tree_image_1 === 'N/A' ? <p className="hidden"></p> : <img src={selectedTree.tree_image_1} /> }
                  { selectedTree.tree_image_2 === 'N/A' ? <p className="hidden"></p> : <img src={selectedTree.tree_image_2} /> }
                  { selectedTree.tree_image_3 === 'N/A' ? <p className="hidden"></p> : <img src={selectedTree.tree_image_3} /> }
                  { selectedTree.tree_image_4 === 'N/A' ? <p className="hidden"></p> : <img src={selectedTree.tree_image_4} /> }
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
               <p className="about-this-tree">{`🐝 Pollinator Friendly: ${selectedTree.pollinator_friendly} 🐝`}</p><br></br><br></br>
               <p className="about-this-tree">Find more info at <a className="about-this-tree nature-link" href={selectedTree.outgoing_link}>Nature Hills</a></p>
            </section>
            <Link to='/result'>
               <img src={woodenArrow} alt='wooden arrow pointing to the left' onClick={() => clearSelectedTree()}></img>
            </Link>
         </div>
       </>
    )
}
export default DetailsContainer;