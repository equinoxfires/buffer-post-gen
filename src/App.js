import React, { Component } from 'react';
import { Textfit } from 'react-textfit';
import html2canvas from 'html2canvas';
import c2i from './canvas2image.js';
import TypeSelect from './TypeSelect.js';
import OpacitySelect from './OpacitySelect.js';


import protip from './assets/protip.png';
import exercise from './assets/exercise.png';
import cr from './assets/currentlyReading.png';
import quote from './assets/quote.png';

import './App.css';

const logo = { protip, exercise, cr, quote };
const backgrounds = [];

for (let i = 4; i <= 39; i++) { backgrounds.push(i + '.jpg') };

console.log(backgrounds);
const testText =
  'It is most commonly used when mix-blend-mode has been declared on another element. Applying isolation to the element guards that element so that it does not inherit the mix-blend-mode applied to the other elements that might be behind it..';

// Buffer information
let accessToken = '2/1723705287d8b7f869da74b51aff2f2b6ce8032e61a7494a4273e5ed756ebac388668cd75d730596dfe96e7b826d52a75c16653a9fcfcf57c02b86a83f3894c2';
// Client ID: 5d0cebbf2131fe43e278863c
// Client Secret: 11d11679cb6da73c3e6def668b8bd8a3
// Redirect URI: urn: ietf: wg: oauth: 2.0: oob

class App extends Component {
  constructor() {
    super();
    const background =
      backgrounds[Math.floor(Math.random() * backgrounds.length)];
    this.state = { background, input: testText, output: testText, opacity: 100, type: 'protip' };
    this.enterText = this.enterText.bind(this);
    this.generateText = this.generateText.bind(this);
    this.generatePost = this.generatePost.bind(this);
    this.generateBackground = this.generateBackground.bind(this);
    this.setOpacity = this.setOpacity.bind(this);
    this.selectType = this.selectType.bind(this);
  }
  enterText(event) {
    this.setState({ input: event.target.value });
  }
  setOpacity(value) {
    this.setState({ opacity: value });
  }

  selectType(value) {
    this.setState({ type: value });
  }
  generateText() {
    console.log('called generateText');
    this.setState({
      output: this.state.input
    });
  }
  generatePost() {
    let self = this;
    let App = document.getElementById('App');
    html2canvas(App).then(function (canvas) {
      document.body.appendChild(canvas);
      console.log(c2i);
      const generatedImage = c2i.convertToPNG(canvas, 1080, 1350);
      c2i.saveAsPNG(canvas);
      console.log(generatedImage);

      // // const requestUrl =
      // //   'https://api.bufferapp.com/1/profiles.json?access_token=' +
      // //   accessToken +
      // //   '';
      // // const postUrl =
      // //   'https://api.bufferapp.com/1/updates/create.json?access_token=' +
      // //   accessToken +
      // //   '&text=This%20is%20an%20example%20update&media[link]=http%3A%2F%2Fgoogle.com&media[description]=The%20google%20homepage';
      // // self.httpGetAsync(requestUrl, function (response) {

      // //   console.log(response);
      // //   self.httpPostAsync(postUrl, function (response) {

      // //     console.log(response);

      // //   });
      // });
    });
  }
  httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        callback(xmlHttp.responseText);
    };
    xmlHttp.open('GET', theUrl, true); // true for asynchronous
    xmlHttp.send(null);
  }
  httpPostAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        callback(xmlHttp.responseText);
    };
    xmlHttp.open('GET', theUrl, true); // true for asynchronous
    xmlHttp.send(null);
  }
  generateBackground() {
    console.log('called generateBackground');
    this.setState({
      background: backgrounds[Math.floor(Math.random() * backgrounds.length)]
    });
  }
  render() {
    const bgStyle = { backgroundImage: 'url(' + this.state.background + ')', opacity: this.state.opacity * 0.01 };

    return (
      <div className="master">
        <div className="controls">
          <textarea value={this.state.input} onChange={this.enterText} />
          <button onClick={this.generateText}>Generate</button>
          <button onClick={this.generateBackground}>New Background</button>
          <button onClick={this.generatePost}>Make Post</button>
          <TypeSelect selectType={this.selectType} type={this.state.type} />
          <OpacitySelect setOpacity={this.setOpacity} opacity={this.state.opacity} />
        </div>
        <div className="App" id="App" style={{ background: 'black' }}>
          <div className="app-bg" style={bgStyle}>
            {/* <div className="colors-holder">
            <div className="low-pass" />
            <div className="hue-pass" />
            <div className="high-pass" />
          </div> */}

          </div>

          <div className="app-bg">
            <div className="text-holder">
              <Textfit className="body-text" mode="multi">
                {this.state.output}
              </Textfit>
            </div>
            <img src={logo[this.state.type]} className="App-logo" alt="logo" />
          </div>

        </div>

      </div>
    );
  }
}

export default App;
