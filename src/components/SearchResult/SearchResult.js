import React from "react";
import './SearchResult.css';
import TreesContainer from "../TreesContainer/TreesContainer";
import arrow from '../../assets/arrow.png';

const SearchResult = ({filteredTrees, changeSelectedTree}) => {
    return (
        <>
        <h2>Best Trees For Your Area:</h2>
        <h3>Your Growing Zone: Here </h3>
       <TreesContainer filteredTrees={filteredTrees} changeSelectedTree={changeSelectedTree}/>
       <img src={arrow} alt='black arrow pointing to the left'></img>
       </>
    )
}
export default SearchResult;