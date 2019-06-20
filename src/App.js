import React from 'react';
import Textfit from 'react-textfit';
import logo from './assets/proseProtips.png';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import './App.css';

function App() {
  const backgrounds = [img1, img2, img3];

  const testText = 'Write every day.'

  var background = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  const bgStyle = { backgroundImage: 'url(' + background + ')' };

  return (
    <div className="App" style={bgStyle}>
      <div className="colors-holder">
        <div className="low-pass" />
        <div className="hue-pass" />
        <div className="high-pass" />
      </div>
      <Textfit className="body-text" mode="multi">
        {testText}
      </Textfit>

      <img src={logo} class="App-logo" alt="logo" />
    </div>
  );
}

export default App;
