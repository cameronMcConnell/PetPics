import '../styles/About.css';

const About = () => {
  return (
  <div className="about-container">
    <div class="app-info">
      <h1>PetPics Information</h1>
      <p>
        PetPics is a game where your pets are the main character! All we ask is to create an account with your email and you're good to go!
        Please view the details listed in the next few sections to get an understanding of the rules and how you can get your pet in the game.
      </p>
      <div class="info-section">
        <h2>Features:</h2>
        <ul>
          <li>Responsive Design</li>
          <li>HTML and CSS</li>
        </ul>
      </div>
      <div class="info-section">
        <h2>Contact:</h2>
        <p>Email: example@example.com</p>
      </div>
    </div>
  </div>
  );
}

export default About;