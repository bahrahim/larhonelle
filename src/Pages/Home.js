import React from 'react';
import Caroussel from '../Componentes/Caroussel';
import Footer from '../Componentes/Footer';
import NavBar from '../Componentes/NavBar';
import Team from '../Componentes/Team';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Team/>
            <Footer/>
        </div>
    );
};

export default Home;