import React, { useState } from "react";
import './SearchResult.css';
import TreesContainer from "../TreesContainer/TreesContainer";
import arrow from '../../assets/arrow.png';
import { Link } from 'react-router-dom';


const SearchResult = ({zip, changeZipCode, allZipCodes, allTrees, changeSelectedTree, clearZipTrees}) => {
    
    const [filteredTrees, setFilteredTrees] = useState([]);
    const [growingZone, setGrowingZone] = useState(0);

    console.log(zip, '<<< zip')
    console.log(allZipCodes, '<<< allZipCodes')

    const filterTrees = () => {
        let matchZip = allZipCodes.find(zippy => zippy.zip_code === zip);
        setGrowingZone(matchZip.growing_zone);
        console.log('growingZone', growingZone);
        let treeList = allTrees.filter(tree => tree.growing_zone === matchZip.growing_zone)
        console.log(treeList, '<<< treeList');
        setFilteredTrees([...treeList]);
        console.log(filteredTrees, '<<< filteredTrees')
    }
    
    filterTrees();

    
    window.scrollTo(0,0)
    return (
        <>
            <h2>Best Trees For Your Area</h2>
            <h3>{`Your Growing Zone: ${growingZone}`}</h3>
        <TreesContainer filteredTrees={filteredTrees} changeSelectedTree={changeSelectedTree}/>
        <Link to='/'>
            <img src={arrow} alt='black arrow pointing to the left' onClick={() => clearZipTrees()}></img>
        </Link>
       </>
    )
}
export default SearchResult;