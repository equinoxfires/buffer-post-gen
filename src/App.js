import React, { Component } from 'react';
import { Textfit } from 'react-textfit';
import html2canvas from 'html2canvas';
import c2i from './canvas2image.js';
import logo from './assets/proseProtips.png';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import './App.css';
const backgrounds = [img1, img2, img3];
const testText =
  'It is most commonly used when mix-blend-mode has been declared on another element. Applying isolation to the element guards that element so that it does not inherit the mix-blend-mode applied to the other elements that might be behind it..';

// Buffer information
// Access token: 1/b22b4d576e4e3b37602d070cd555b190
// Client ID: 5d0cebbf2131fe43e278863c
// Client Secret: 11d11679cb6da73c3e6def668b8bd8a3
// Redirect URI: urn: ietf: wg: oauth: 2.0: oob

class App extends Component {
  constructor() {
    super();
    const background =
      backgrounds[Math.floor(Math.random() * backgrounds.length)];
    this.state = { background, input: testText, output: testText };
    this.enterText = this.enterText.bind(this);
    this.generateText = this.generateText.bind(this);
    this.generatePost = this.generatePost.bind(this);
    this.generateBackground = this.generateBackground.bind(this);
  }
  enterText(event) {
    this.setState({ input: event.target.value });
  }
  generateText() {
    console.log('called generateText');
    this.setState({
      output: this.state.input
    });
  }
  generatePost() {
    let App = document.getElementById('App');
    html2canvas(App).then(function(canvas) {
      document.body.appendChild(canvas);
      console.log(c2i);
      const generatedImage = c2i.convertToPNG(canvas, 1080, 1350);
      console.log(generatedImage);
    });
  }
  generateBackground() {
    console.log('called generateBackground');
    this.setState({
      background: backgrounds[Math.floor(Math.random() * backgrounds.length)]
    });
  }
  render() {
    const bgStyle = { backgroundImage: 'url(' + this.state.background + ')' };

    return (
      <div className="master">
        <div className="controls">
          <textarea value={this.state.input} onChange={this.enterText} />
          <button onClick={this.generateText}>Generate</button>
          <button onClick={this.generateBackground}>New Background</button>
          <button onClick={this.generatePost}>Make Post</button>
        </div>
        <div className="App" id="App" style={bgStyle}>
          {/* <div className="colors-holder">
            <div className="low-pass" />
            <div className="hue-pass" />
            <div className="high-pass" />
          </div> */}
          <img src={logo} className="App-logo" alt="logo" />

          <div className="text-holder">
            <Textfit className="body-text" mode="multi">
              {this.state.output}
            </Textfit>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
