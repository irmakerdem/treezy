import React from "react";
import './Home.css';
import Form from '../Form/Form';
// import jungle from '../../assets/jungle.jpg';

const Home = ({ changeZipCode }) => {
    return (
        <div className="home-page">
            <main className="main-wrapper">
                    <section className="left-container">
                        <h2 className="home-header" data-cy="home-header">How to use Tree Pal:</h2>
                        <p className="instructions" data-cy="instructions">Please enter your CO zip code to view trees that will thrive in your growing zone.</p>
                    </section>
                    <section className="right-container">
                        <Form changeZipCode={changeZipCode}/>
                    </section>
                </main>
                {/* <img className="jungle" src={jungle} alt='jungle image'/> */}
        </div>
    )
}
export default Home;