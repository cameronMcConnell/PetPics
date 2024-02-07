import { useState } from 'react';
import Heart from './imgs/heart.svg';
import Attack from './imgs/attack.svg';
import Defense from './imgs/defense.svg';
import LeftArrow from './imgs/arrow-left.svg';
import '../styles/LargeCard.css';

/*
**  The way this component functions will probably change,
**  leave uncommented until then
*/
const LargeCard = ({ imageUrl, name, health, damage, defense, setHasReturned, setHasFullscreen }) => {
  const handleReturn = () => {
    setHasReturned(true);
    setHasFullscreen(false);
  }
  
  return (
    <div className="large-card-container">
      <div className="return-container">
        <button className="arrow-button padding10px" onClick={handleReturn}>
          <img src={LeftArrow} alt=""/>
        </button>
      </div>
      <div className="large-card">
        <img src={imageUrl} alt={name} />
          <div className="large-card-content">
            <h3>{name}</h3>
            <div className="stats-container">
              <div className="stat-container">
                <img className="stat-icon" src={Heart} alt=""/>
              </div>
              <p>{health}</p>
              <div className="stat-container">
                <img className="stat-icon" src={Defense} alt=""/>
              </div>
              <p>{defense}</p>
              <div className="stat-container">
                <img className="stat-icon" src={Attack} alt=""/>
              </div>
              <p>{damage}</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default LargeCard;