import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import {Link} from 'react-router-dom'


import  logoImg from '../images/logo.svg'
import '../styles/pages/landing.css'


function Landing () {
    return (
        <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>


        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Tocantins</strong>
          <span>Araguaína</span>
        </div>

        <Link to="/app" className="enter-app">
        <FiArrowRight size="30" color="rgba(0,0,0,0.6)"/>
        </Link>
      </div>
    </div>
    );
}

export default Landing;