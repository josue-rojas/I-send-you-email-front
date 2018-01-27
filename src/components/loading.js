import React, {Component} from 'react';
import '../style/sass/loading.css';

export default class Loading extends Component{
  render(){
    console.log(this.props.isLoading)
    const style = {
      display: this.props.isLoading ? 'inherit' : 'none',
    }
    return(
      <div className='loading' style={style}></div>
    )
  }
}
