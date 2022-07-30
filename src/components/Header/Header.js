import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({clearZipTrees}) => {
    return(
        <Link className="header-link" to='/'>
            <h1 className='header' data-cy='header' onClick={() => clearZipTrees()}>🌳 Tree Pal 🌳</h1>
        </Link>
    )
}

export default Header;