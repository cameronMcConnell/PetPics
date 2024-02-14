import Book from './imgs/book.svg';
import Play from './imgs/play.svg';
import HealthExample from './imgs/Health-Example.png';
import DefenseExample from './imgs/Defense-Example.png';
import AttackExample from './imgs/Attack-Example.png';
import '../styles/About.css';

const About = () => {
  return (
  <div className="about-container">
    <div className="app-info">
      <header className="about-header">
        <img className="header-img" src={Book} alt=""/> 
        <h1>PetPics Information</h1>
      </header>
      <p>
        PetPics is a game where your pets are the main character! All we ask is to create an account with your email and you're good to go!
        Please view the details listed in the next few sections to get an understanding of the rules and how you can get your pet in the game.
      </p>
      <div className="info-section">
        <header className="about-header">
          <img className="header-img" src={Play} alt=""/> 
          <h2>How To Play:</h2>
        </header>
        <ul>
          <li>The goal of the game is to be player with the last cards standing.</li>
          <li>Each player will start with their chosen deck of 5 cards. They can change these before they start the match.</li>
          <li>This is a turn based strategy game where each player will have their own turn to decide what actions each of their cards will perform.</li>
          <li>The playable actions are attacking and defending.</li>
          <li><h3>On Defense:</h3></li>
          <ul>
            <li>Hello</li>
          </ul>
        </ul>
      </div>
      <div className="info-section">
        <h2>Contact:</h2>
        <p>Email: example@example.com</p>
      </div>
    </div>
  </div>
  );
}

export default About;