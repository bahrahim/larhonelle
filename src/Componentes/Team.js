import React from 'react';
import lr_orange from '../../src/assets/lr_orange.png';

function Team() {
  return (
    <div className='teamsCards' >
        <h2>Notre <span>Equipe</span></h2>
        <div className='cardsContainer'>
        <div className='card'>
            <img src={lr_orange} alt="hugo"/>
            <p>Salut moi c'est Hugo Houdain</p>
        </div>
        <div className='card'>
            <img src={lr_orange} alt='Rahim'/>
            <p>Salut moi c'est Abdoul Rahim</p>
        </div>
        <div className='card'>
            <img src={lr_orange} alt='Aboubacar'/>
            <p>Salut moi c'est Aboubacar Nabe</p>
        </div>
        </div>
    </div>
  )
}

export default Team;