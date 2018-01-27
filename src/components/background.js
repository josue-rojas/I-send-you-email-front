import React, {Component} from 'react';
import '../style/sass/background.css';

export default class Background extends Component{
  render(){
    const style={
      background: {
        backgroundImage:'url(' + this.props.backgroundImage + ')',
        filter: this.props.isLoading ? 'blur(5px)' : 'blur(0)',
      },
      shade: {
        background: this.props.isLoading ? 'linear-gradient(rgba(2, 61, 95, 0.18), rgba(113, 88, 73, 0.79))' : 'linear-gradient(rgba(5, 164, 255, 0.18), rgba(255, 199, 165, 0.79))',
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
