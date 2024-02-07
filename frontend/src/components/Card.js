import Heart from './imgs/heart.svg';
import Attack from './imgs/attack.svg';
import Defense from './imgs/defense.svg';
import '../styles/Card.css';

/*
**  The way this component functions will probably change,
**  leave uncommented until then
*/
const Card = ({ imageUrl, name, health, damage, defense, setHasFullscreen, setFullscreenData, setScrollHeight, setMobileMenuVisible }) => {
  const handleFullScreen = () => {
    setMobileMenuVisible(false);
    setFullscreenData({imageUrl, name, health, damage, defense});
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
  );
};

export default Card;