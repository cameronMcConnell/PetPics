import { useState } from 'react';
import Heart from '../imgs/heart.svg';
import '../styles/Card.css';

/*
**  The way this component functions will probably change,
**  leave uncommented until then
*/
const Card = ({ imageUrl, name, likes, setHasFullscreen, setFullscreenData, setScrollHeight, setMobileMenuVisible }) => {
  const [imageLikes, setImageLikes] = useState(likes);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setImageLikes((prevLikes) => prevLikes + 1);
      setHasLiked(true);
    } 
  }

  const handleFullScreen = () => {
    setMobileMenuVisible(false);
    setFullscreenData({imageUrl: imageUrl, name: name, likes: likes});
    setScrollHeight(window.scrollY);
    setHasFullscreen(true);
  }

  return (
    <div className="card">
      <button className="image-button" onClick={handleFullScreen}>
        <img src={imageUrl} alt={name} />
      </button>
      <div className="card-content">
        <h3>{name}</h3>
        <div className="rating-container">
          <button className="heart-button" onClick={handleLike}>
            <img className="heart" src={Heart} alt=""/>
          </button>
          <p key={name}>{imageLikes}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;