import React from "react";
import './SearchResult.css';
import TreesContainer from "../TreesContainer/TreesContainer";
// import woodenArrow from '../../assets/wooden-arrow.png';
import { Link } from 'react-router-dom';


const SearchResult = ({filteredTrees, changeSelectedTree, clearZipTrees}) => {
    return (
        <>
            <h2 className="best-trees">Best Trees For Your Area</h2>
            <h3 className="your-zone">{`Your Growing Zone: ${filteredTrees[0].growing_zone}`}</h3>
        <TreesContainer filteredTrees={filteredTrees} changeSelectedTree={changeSelectedTree}/>
        <Link to='/'>
            {/* <img className="wooden-arrow" src={woodenArrow} alt='wooden arrow pointing to the left' onClick={() => clearZipTrees()}></img> */}
        </Link>
       </>
    )
}
export default SearchResult;