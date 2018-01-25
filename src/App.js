import React, { Component } from 'react';
import './style/sass/default.css';
import Background from './components/background';
import FormBox from './components/formBox';
// Photo by Samuel Zeller on Unsplash
import image from './images/background.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <Background backgroundImage={image}/>
        <FormBox />
      </div>
    );
  }
}

export default App;
