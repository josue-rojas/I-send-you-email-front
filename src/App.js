import React, { Component } from 'react';
import './style/sass/default.css';
import Background from './components/background';
import FormBox from './components/formBox';
// Photo by Samuel Zeller on Unsplash
import image from './images/background.jpg';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(isLoading){
    console.log('hahaha', isLoading)
    this.setState({isLoading:isLoading})
  }
  render() {
    return (
      <div>
        <Background backgroundImage={image} isLoading={this.state.isLoading}/>
        <FormBox submitChange={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
