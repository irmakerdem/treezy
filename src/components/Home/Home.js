import React from "react";
import './Home.css';
import Form from '../Form/Form';

const Home = ({ changeZipCode }) => {
    return (
        <main>
        <section>
            <h2 className="home-header" data-cy="home-header">How to use Tree Pal:</h2>
            <p className="instructions" data-cy="instructions">Please enter your CO zip code to view trees that will thrive in your growing zone.</p>
        </section>
        <Form changeZipCode={changeZipCode}/>
        </main>
    )
}
export default Home;