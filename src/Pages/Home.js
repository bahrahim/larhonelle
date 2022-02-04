import React from 'react';
import Caroussel from '../Componentes/Caroussel';
import Footer from '../Componentes/Footer';
import NavBar from '../Componentes/NavBar';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Caroussel/>
            <Footer/>
        </div>
    );
};

export default Home;