import React from "react";
import './Home.css';
import Form from '../Form/Form';
import Header from '../Header/Header';
import colorado from '../../assets/colorado-flag.webp';

const Home = ({ changeZipCode }) => {
    return (
        <>
            <div className="image-box" style={{ backgroundImage: `url(https://photoeverywhere.co.uk/britain/dorset/trees.JPG)`}}>
                <div className="home-page">
                    <main className="main-wrapper">
                        <section>
                            <Header />
                        </section>
                        <section className="main-container">
                            <Form changeZipCode={changeZipCode}/>
                        </section>
                        <br></br>
                        <img className="colorado" src={colorado}></img>
                        <p className="made-in">Made in and for CO</p>
                    </main>
                </div>
            </div>
        </>
    )
}
export default Home;