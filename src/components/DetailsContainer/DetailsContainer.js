import React, { Component } from "react";
import './DetailsContainer.css';
import arrow from '../../assets/arrow.png';
import { Link } from 'react-router-dom';
import { getTrees } from '../../apiCalls';

class DetailsContainer extends Component {
   constructor(props) {
     super(props)
     this.state = {
         myTree: this.props.selectedTree,
         trees: this.props.trees
     }
   }

   // componentDidMount = () => {
   //    getTrees() 
   //    .then(data => this.setState({ trees : data}))
   //    this.viewTree();
   // }

   // viewTree = () => {
   //    if(!this.props.selectedTree) {
   //       console.log('Hit line 26 of details container');
   //       console.log('this.state.trees', this.state.trees);
   //       this.setState({myTree: this.state.trees[this.props.match.params.id -1]});
   //    } 

   //    console.log(this.state.myTree);
   // }

   render() {

      console.log('mytree', this.state.myTree);
      console.log('trees', this.state.trees);
      window.scrollTo(0, 0)

      const createHTML = () => {
         return {__html: this.state.myTree.overview_description};
      }

      return (
         <>
           <h2>{`About: ${this.state.myTree.tree_name}`}</h2>
           <p>{`Botanical Name: ${this.state.myTree.botanical_name}`}</p><br></br>
           <h3>{`${this.state.myTree.tree_name} Growing Zone: ${this.state.myTree.growing_zone}`}</h3>
           <section className='detailImages'>
             { this.state.myTree.main_tree_image === 'N/A' ? null : <img src={this.state.myTree.main_tree_image} /> }<br></br>
             { this.state.myTree.tree_image_1 === 'N/A' ? null : <img src={this.state.myTree.tree_image_1} /> }<br></br>
             { this.state.myTree.tree_image_2 === 'N/A' ? null : <img src={this.state.myTree.tree_image_2} /> }<br></br>
             { this.state.myTree.tree_image_3 === 'N/A' ? null : <img src={this.state.myTree.tree_image_3} /> }<br></br>
             { this.state.myTree.tree_image_4 === 'N/A' ? null : <img src={this.state.myTree.tree_image_4} /> }<br></br>
          </section>
          <section>
          <p>📝 Attributes</p>
            <p dangerouslySetInnerHTML={ createHTML() } />
           </section>
           <section>
            <p>{`☀️ Sun Preference: ${this.state.myTree.sun_preference}`}</p><br></br>
            <p>{`🪴 Soil Preference: ${this.state.myTree.soil_preference}`}</p><br></br>
            <p>{`🐢 Growth Speed: ${this.state.myTree.growth_speed}`}</p><br></br>
            <p>{`🪜 Mature Height: ${this.state.myTree.mature_height}`}</p><br></br>
            <p>{`🌳 Mature Spread: ${this.state.myTree.mature_speed}`}</p><br></br>
            <p>{`🌺 Flower Color: ${this.state.myTree.flower_color}`}</p><br></br>
            <p>{`🍃 Foliage Color: ${this.state.myTree.foliage_color}`}</p><br></br>
            <p>{`🍂 Fall Color: ${this.state.myTree.fall_color}`}</p><br></br>
            <p>{`🐝 Pollinator Friendly: ${this.state.myTree.pollinator_friendly}`}</p><br></br>
            <a href={this.state.myTree.outgoing_link}>Find more info at Nature Hills</a><br></br>
           </section>
          <Link to='/result'>
             <img src={arrow} alt='black arrow pointing to the left' onClick={() => this.props.clearSelectedTree()}></img>
           </Link>
           </>
      )
   }
}
export default DetailsContainer;