import React from "react";
import './TreesContainer.css';
import Card from '../Card/Card';

const TreesContainer = ({filteredTrees, changeSelectedTree}) => {
  const resultsList = filteredTrees.map(tree => {
    return  (
      <Card 
        key={tree.id}
        id={tree.id}
        name={tree.tree_name}
        mainImage={tree.main_tree_image}
        growingZone={tree.growing_zone}
        changeSelectedTree={changeSelectedTree}
      />    
    )
  })
  return (
      <div className="trees-container">{resultsList}</div>
    )
}

export default TreesContainer;