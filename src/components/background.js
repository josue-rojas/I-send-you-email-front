import React, {Component} from 'react';
import '../style/sass/background.css';

export default class Background extends Component{
  render(){
    const style={
      background: {
        backgroundImage:'url(' + this.props.backgroundImage + ')',
      },
      shade: {
        background: 'linear-gradient(rgba(5, 164, 255, 0.18), rgba(255, 199, 165, 0.79))',
      }
    }
    return(
      <div className='background-wrapper'>
        <div style={style.background} className='background'></div>
        <div style={style.shade} className='background'></div>
      </div>
    )
  }
}
