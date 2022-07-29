import React from "react";
import './SearchResult.css';
import TreesContainer from "../TreesContainer/TreesContainer";
import arrow from '../../assets/arrow.png';
import { Link } from 'react-router-dom';


const SearchResult = ({filteredTrees, changeSelectedTree, clearZipTrees}) => {
    return (
        <>
            <h2>Best Trees For Your Area</h2>
            <h3>{`Your Growing Zone: ${filteredTrees[0].growing_zone}`}</h3>
        <TreesContainer filteredTrees={filteredTrees} changeSelectedTree={changeSelectedTree}/>
        <Link to='/'>
            <img src={arrow} alt='black arrow pointing to the left' onClick={() => clearZipTrees()}></img>
        </Link>
       </>
    )
}
export default SearchResult;