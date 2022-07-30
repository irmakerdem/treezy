import React, { Component } from "react";
import './DetailsContainer.css';
import arrow from '../../assets/arrow.png';
import { Link } from 'react-router-dom';

class DetailsContainer extends Component {
   constructor() {
     super()
     this.state = {
         myTree: {},
         trees: []
     }
   }

   render() {
      window.scrollTo(0, 0)

      const createHTML = () => {
         return {__html: this.props.selectedTree.overview_description};
      }

      return (
         <>
           <h2>{`About: ${this.props.selectedTree.tree_name}`}</h2>
           <p>{`Botanical Name: ${this.props.selectedTree.botanical_name}`}</p><br></br>
           <h3>{`${this.props.selectedTree.tree_name} Growing Zone: ${this.props.selectedTree.growing_zone}`}</h3>
           <section className='detailImages'>
             { this.props.selectedTree.main_tree_image === 'N/A' ? null : <img src={this.props.selectedTree.main_tree_image} /> }<br></br>
             { this.props.selectedTree.tree_image_1 === 'N/A' ? null : <img src={this.props.selectedTree.tree_image_1} /> }<br></br>
             { this.props.selectedTree.tree_image_2 === 'N/A' ? null : <img src={this.props.selectedTree.tree_image_2} /> }<br></br>
             { this.props.selectedTree.tree_image_3 === 'N/A' ? null : <img src={this.props.selectedTree.tree_image_3} /> }<br></br>
             { this.props.selectedTree.tree_image_4 === 'N/A' ? null : <img src={this.props.selectedTree.tree_image_4} /> }<br></br>
          </section>
          <section>
          <p>📝 Attributes</p>
            <p dangerouslySetInnerHTML={ createHTML() } />
           </section>
           <section>
            <p>{`☀️ Sun Preference: ${this.props.selectedTree.sun_preference}`}</p><br></br>
            <p>{`🪴 Soil Preference: ${this.props.selectedTree.soil_preference}`}</p><br></br>
            <p>{`🐢 Growth Speed: ${this.props.selectedTree.growth_speed}`}</p><br></br>
            <p>{`🪜 Mature Height: ${this.props.selectedTree.mature_height}`}</p><br></br>
            <p>{`🌳 Mature Spread: ${this.props.selectedTree.mature_speed}`}</p><br></br>
            <p>{`🌺 Flower Color: ${this.props.selectedTree.flower_color}`}</p><br></br>
            <p>{`🍃 Foliage Color: ${this.props.selectedTree.foliage_color}`}</p><br></br>
            <p>{`🍂 Fall Color: ${this.props.selectedTree.fall_color}`}</p><br></br>
            <p>{`🐝 Pollinator Friendly: ${this.props.selectedTree.pollinator_friendly}`}</p><br></br>
            <a href={this.props.selectedTree.outgoing_link}>Find more info at Nature Hills</a><br></br>
           </section>
          <Link to='/result'>
             <img src={arrow} alt='black arrow pointing to the left' onClick={() => this.props.clearSelectedTree()}></img>
           </Link>
           </>
      )
   }
}
export default DetailsContainer;