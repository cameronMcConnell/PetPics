import { useState } from 'react';
import Home from './components/Home';
import Submit from './components/Submit';
import Contact from './components/Contact';
import About from './components/About';
import './App.css';

function App() {
  /*
  **  IsMobileMenuVisible: bool: Handles mobile menu visability
  **  pageNumber: number: Controls which component is rendered in the App
  **  homePageNumber: number: Controls which page to pull from the current data
  */
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [homePageNumber, setHomePageNumber] = useState(1);
  const [signedIn, setSignedIn] = useState(false);

  // Toggles the display for the dropdown mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  // Handles which component to render in the App
  const renderPageHandler = () => {
    if (!signedIn) {
      switch (pageNumber) {
        case 1:
          return (
            <About />
          );
        case 2:
          break;
        default:
          break;
      }
    }
    else {
      switch (pageNumber) {
        case 1:
          return ( 
            <Home 
              setAppPageNumber={setPageNumber} 
              setHomePageNumber={setHomePageNumber} 
              homePageNumber={homePageNumber} 
              isMobileMenuVisible={isMobileMenuVisible} 
              setMobileMenuVisible={setMobileMenuVisible} 
            />
          );
        case 2:
          return (
            <Submit />
          ); 
        case 3:
          return (
            <Contact />
          ); 
        default:
          return <p>Error: 404</p>
      }
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="logo">PetPics</div>
        <button className="menu-icon" onClick={toggleMobileMenu}>
          ☰
        </button>
        <nav className="menu">
          {signedIn ? 
          <ul className="menu-list">
            <li><button onClick={() => setPageNumber(1)}>Home</button></li>
            <li><button onClick={() => setPageNumber(2)}>Submit</button></li>
            <li><button onClick={() => setPageNumber(3)}>Contact</button></li>
          </ul> :
          <ul className="menu-list">
            <li><button onClick={() => setPageNumber(1)}>About</button></li>
            <li><button onClick={() => setPageNumber(2)}>Account</button></li>
          </ul>}
        </nav>
      </header>
      {isMobileMenuVisible ? signedIn ? 
        <nav className="mobile-menu">
          <ul className="mobile-menu-list">
            <li><button onClick={() => setPageNumber(1)}>Home</button></li>
            <li><button onClick={() => setPageNumber(2)}>Submit</button></li>
            <li><button onClick={() => setPageNumber(3)}>Contact</button></li>
          </ul>
        </nav> :
        <nav className="mobile-menu">
          <ul className="mobile-menu-list">
            <li><button onClick={() => setPageNumber(1)}>About</button></li>
            <li><button onClick={() => setPageNumber(2)}>Account</button></li>
          </ul>
        </nav> : ""}
      { renderPageHandler() }
    </div>
  );
}

export default App;