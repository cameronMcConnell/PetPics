import { useState } from 'react';
import Heart from './imgs/heart.svg';
import LeftArrow from './imgs/arrow-left.svg';
import '../styles/LargeCard.css';

/*
**  The way this component functions will probably change,
**  leave uncommented until then
*/
const LargeCard = ({ imageUrl, name, likes, setHasReturned, setHasFullscreen }) => {
  const [imageLikes, setImageLikes] = useState(likes);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setImageLikes((prevLikes) => prevLikes + 1);
      setHasLiked(true);
    } 
  }

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
          <div className="rating-container">
            <button className="heart-button" onClick={handleLike}>
              <img className="heart" src={Heart} alt=""/>
            </button>
            <p key={name}>{imageLikes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LargeCard;