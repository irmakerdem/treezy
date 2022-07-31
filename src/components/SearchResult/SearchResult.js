import React from 'react';
import './SearchResult.css';
import TreesContainer from '../TreesContainer/TreesContainer';
import { Link } from 'react-router-dom';
import colorado from '../../assets/colorado-flag.webp';
import Header from '../Header/Header';

const SearchResult = ({ filteredTrees, changeSelectedTree, clearZipTrees }) => {
  return (
    <>
      <div className='image2-box' style={{ backgroundImage: `url(https://photoeverywhere.co.uk/britain/dorset/trees.JPG)` }}>
        <div className='search-page'>
          <div className='search-results'>
            <div className='mini-left'>
                <Header />
            </div>
            <div className='results-top'>
              <h2 className='best-trees'>{`Steamboat: Zone ${filteredTrees[0].growing_zone}`}</h2>
              <h3 className='your-zone'>Recommended Species</h3>
            </div>
            <TreesContainer className ='tree-container' filteredTrees={filteredTrees} changeSelectedTree={changeSelectedTree} />
            <Link to='/'>
              <input
                className='leaf'
                type='submit'
                value='LEAF!'
                data-cy='leaf-button'
                onClick={() => clearZipTrees()}
              />
            </Link>
            <br></br>
            <img className='colorado2' src={colorado}></img>
            <p className='made2-in'>Made in and for CO</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchResult;