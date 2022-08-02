import React from 'react';
import './Home.css';
import Form from '../Form/Form';
import Header from '../Header/Header';
import colorado from '../../assets/colorado-flag.webp';

const Home = ({ changeZipCode, clearZipTrees }) => {
  return (
    <>
      <div className='image-box' style={{ backgroundImage: `url(https://photoeverywhere.co.uk/britain/dorset/trees.JPG)`}}>
        <div className='home-page'>
          <main className='main-wrapper'>
            <section>
              <Header clearZipTrees={clearZipTrees}/>
            </section>
            <section className='main-container'>
              <Form changeZipCode={changeZipCode}/>
            </section>
            <br></br>
            <div className='home-bottom'>
              <img className='colorado' alt='flag of Colorado' src={colorado}></img>
              <p className='made-in'>Made in and for CO</p>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Home;