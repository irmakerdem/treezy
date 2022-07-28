import React from "react";
import './TreesContainer.css';
import Card from '../Card/Card';

const TreesContainer = ({filteredTrees}) => {
    const resultsList = filteredTrees.map(tree => {
      return  (<Card 
            key={tree.id}
            name={tree.tree_name}
            mainImage={tree.main_tree_image}
            growingZone={tree.growing_zone}
        />    
      )
    })
        return (
        <>
        <div>{resultsList}</div>
        </>
    )
}
export default TreesContainer;