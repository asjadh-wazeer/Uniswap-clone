import React from 'react';
import Banner from './Banner';
import Headerone from './Headerone';
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <Headerone></Headerone>
            <Banner></Banner>
        </div>
    );
};

export default Home;