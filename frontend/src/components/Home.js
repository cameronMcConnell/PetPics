import { useState } from 'react';
import Card from './Card';
import LargeCard from './LargeCard';
import LeftArrow from './imgs/arrow-left.svg';
import RightArrow from './imgs/arrow-right.svg';
import data from '../data/data.json';
import '../styles/Home.css';

/*
**  The way this component functions will probably change,
**  leave uncommented until then
*/
const Home = ({ setHomePageNumber, homePageNumber, isMobileMenuVisible, setMobileMenuVisible }) => {
  const [hasFullscreen, setHasFullscreen] = useState(false);
  const [fullscreenData, setFullscreenData] = useState({});
  const [scrollHeight, setScrollHeight] = useState(0);
  const [hasReturned, setHasReturned] = useState(false);

  const handleDecrement = () => {
    if (homePageNumber > 1) {
      setHomePageNumber((prevPage) => prevPage - 1);
      setScrollHeight(0);
      window.scrollTo({top: 0, behavior: "smooth"});
    }
  }

  const handleIncrement = () => {
    if (homePageNumber < 2) {
      setHomePageNumber((prevPage) => prevPage + 1);
      setScrollHeight(0);
      window.scrollTo({top: 0, behavior: "smooth"});
    }
  }
  
  if (hasFullscreen) 
  {
    return ( 
      <LargeCard {...fullscreenData}
        setHasReturned={setHasReturned}
        setHasFullscreen={setHasFullscreen} />
    );
  } 
  else 
  {  
    if (!isMobileMenuVisible && hasReturned) {
      setTimeout(() => { window.scrollTo({top: scrollHeight, behavior: "smooth"}); });
      setHasReturned(false);
    }
    
    return (
      <div>
        <div className='card-container'>
          {data[homePageNumber].map((obj) => (
            <Card key={obj.name} {...obj} 
              setHasFullscreen={setHasFullscreen} 
              setFullscreenData={setFullscreenData} 
              setScrollHeight={setScrollHeight} 
              setMobileMenuVisible={setMobileMenuVisible} />
          ))}
        </div>
        <footer className="fixed-footer">
          <div className="page-container">
            <button className="arrow-button" onClick={handleDecrement}>
              <img src={LeftArrow} alt=""/>
            </button>
            <div className='page-number-container'>
              <p>{homePageNumber}</p>
            </div>
            <button className="arrow-button" onClick={handleIncrement}>
              <img src={RightArrow} alt=""/>
            </button>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;