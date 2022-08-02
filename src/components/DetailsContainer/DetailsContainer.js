import React, { useState , useEffect } from 'react';
import './DetailsContainer.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import colorado from '../../assets/colorado-flag.webp';
import { getSingleTree } from '../../apiCalls';

const DetailsContainer = ({clearSelectedTree, clearZipTrees, match}) => {
  window.scroll(0,0);
  
  const [myTree , setMyTree] = useState({})

  useEffect(() => {
    getSingleTree(match)
      .then(data => {
        setMyTree(data[0])
      })
  },[])

  return (
    <>
      {myTree.tree_name && <>
        <div className='image3-box' style={{ backgroundImage: `url(https://photoeverywhere.co.uk/britain/dorset/trees.JPG)` }}>
          <div className='details-page'>  
            <div className='minih-left'>
              <Header clearZipTrees={clearZipTrees}/>
            </div>
            <div className='details-top'>
              <div className='about-top'>
                <h2 className='tree-title'>{`${myTree.tree_name}`}</h2>
                <p className='botanical'>{`Botanical Name: `} <i>{`${myTree.botanical_name}`}</i></p>
                <h3 className='grow'>{`Growing Zone: ${myTree.growing_zone}`}</h3>
              </div>
              <section className='detail-images'>
                <div className='main-image'>
                  { myTree.main_tree_image === 'N/A' ? null : <img className='detail-page-image' alt={`${myTree.tree_name} photo`} src={myTree.main_tree_image}  /> }
                </div>
                <div className='small-images'>
                  { myTree.tree_image_1 === 'N/A' ? <p className='hidden'></p> : <img className='detail-page-image' alt={`${myTree.tree_name} photo`} src={myTree.tree_image_1} /> }
                  { myTree.tree_image_2 === 'N/A' ? <p className='hidden'></p> : <img className='detail-page-image' alt={`${myTree.tree_name} photo`} src={myTree.tree_image_2} /> }
                  { myTree.tree_image_3 === 'N/A' ? <p className='hidden'></p> : <img className='detail-page-image' alt={`${myTree.tree_name} photo`} src={myTree.tree_image_3} /> }
                  { myTree.tree_image_4 === 'N/A' ? <p className='hidden'></p> : <img className='detail-page-image' alt={`${myTree.tree_name} photo`} src={myTree.tree_image_4} /> }
                </div>
              </section>
            </div>
            <div className='details-wrapper'>
              <div className='details-middle'>
                <p className='attributes-title'>About This Tree</p>
                <ul className='bullet-list'>
                  <li className='a-list'>{myTree.descrip1}</li>
                  <li className='a-list'>{myTree.descrip2}</li>
                  <li className='a-list'>{myTree.descrip3}</li>
                  <li className='a-list'>{myTree.descrip4}</li>
                  <li className='a-list'>{myTree.descrip5}</li>
                  <li className='a-list'>{myTree.descrip6}</li>
                </ul>
              </div>
            </div>
            <div className='details-bottom'>
              <section className='more-about'>
                <h4 className='about-this-tree about'>Attributes</h4>
                <p className='about-this-tree emojis'><b>{`☀️ Sun Preference: `}</b>{`${myTree.sun_preference} ☀️`}</p>
                <p className='about-this-tree emojis'><b>{`🪴 Soil Preference: `}</b>{`${myTree.soil_preference} 🪴`}</p>
                <p className='about-this-tree emojis'><b>{`🐢 Growth Speed: `}</b>{`${myTree.growth_speed} 🐢`}</p>
                <p className='about-this-tree emojis'><b>{`🪜 Mature Height: `}</b>{`${myTree.mature_height} 🪜`}</p>
                <p className='about-this-tree emojis'><b>{`🌳 Mature Spread: `}</b>{`${myTree.mature_spread} 🌳`}</p>
                <p className='about-this-tree emojis'><b>{`🌺 Flower Color: `}</b>{`${myTree.flower_color} 🌺`}</p>
                <p className='about-this-tree emojis'><b>{`🍃 Foliage Color: `}</b>{`${myTree.foliage_color} 🍃`}</p>
                <p className='about-this-tree emojis'><b>{`🍂 Fall Color: `}</b>{`${myTree.fall_color} 🍂`}</p>
                <p className='about-this-tree emojis'><b>{`🐝 Pollinator Friendly: `}</b>{`${myTree.pollinator_friendly} 🐝`}</p><br></br>
                <p className='about-this-tree ext-link'>Find more info at <a className='about-this-tree nature-link' href={myTree.outgoing_link}>Nature Hills</a></p>
              </section>
              <br></br>
              <Link 
                to='/result'>
                <input
                  className='leaf2'
                  type='submit'
                  value='LEAF!'
                  data-cy='leaf-button'
                  onClick={() => clearSelectedTree()}
                />
              </Link>
              <br></br>
              <img className='colorado3' alt='flag of Colorado' src={colorado}></img>
              <p className='made3-in'>Made in and for CO</p>
            </div>
          </div>
        </div>
      </>
      }
    </>
  )
}

export default DetailsContainer;