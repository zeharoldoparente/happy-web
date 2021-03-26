import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaftlet/dist/leaftlet.css';

import '../styles/pages/orphanages-map.css';

import mapMarkerIng from '../images/map-marker.svg';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerIng} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Tocantins</strong>
                    <span>Araguaína</span>
                </footer>
            </aside>


            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />    
            <Map
            center= {[-7.1921678,-48.2081555]}
            zomm= {14}
            style= {{width:'100%', height:'100%'}}
            >
                
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={35} color="#FFF"  />    
            </Link>

        </div>
    );
};

export default OrphanagesMap; 