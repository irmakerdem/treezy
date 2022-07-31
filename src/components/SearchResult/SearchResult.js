import React from "react";
import './SearchResult.css';
import TreesContainer from "../TreesContainer/TreesContainer";
import woodenArrow from '../../assets/wooden-arrow.png';
import { Link } from 'react-router-dom';


const SearchResult = ({filteredTrees, changeSelectedTree, clearZipTrees}) => {
    return (
        <div className="search-results">
            <h2 className="best-trees">Best Trees For Your Area</h2>
            <h3 className="your-zone">{`Your Growing Zone: ${filteredTrees[0].growing_zone}`}</h3>
            <TreesContainer filteredTrees={filteredTrees} changeSelectedTree={changeSelectedTree}/>
            <Link to='/'>
                <img src={woodenArrow} alt='wooden arrow pointing to the left' onClick={() => clearZipTrees()}></img>
            </Link>
       </div>
    )
}
export default SearchResult;