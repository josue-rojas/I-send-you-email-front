import React, {Component} from 'react';
import '../style/sass/formBox.css';

export default class FormBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      emailValue: '',
      emailClass: '',
      messageValue: '',
      messageClass: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleText = this.handleText.bind(this);
  }

  handleSubmit(event){
    console.log('submit pressed');
    event.preventDefault();
  }

  handleEmail(event){
    // https://www.w3resource.com/javascript/form/email-validation.php
    // email regex (no time wasted for me.....)
    let emailGood = 'good';
    if(event.target.value.length === 0 || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value))){
      emailGood = 'error';
    }
    this.setState({
      emailValue: event.target.value,
      emailGood: emailGood,
    })
  }

  handleText(event){
    let messageGood = 'good';
    if(event.target.value.length === 0){
      messageGood = 'error';
    }
    this.setState({
      messageValue: event.target.value,
      messageGood: messageGood
    })
  }

  render(){
    return(
      <div className='form-box-wrapper'>
        <div className='form-box'>
          <div className='title'>
            I-Send-You-Email
          </div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <div>E-mail</div>
              <input type='email' value={this.state.emailValue} onChange={this.handleEmail} className={this.state.emailGood} placeholder='example@example.com'></input>
            </label>
            <label>
              <div>Message</div>
              <textarea rows='3' value={this.state.messageValue} onChange={this.handleText} className={this.state.messageGood} placeholder='ie. Hello!'></textarea>
            </label>
            <input className='submit' type="submit" value="Submit" />
          </form>
          <div className='tiny-text'>
            Note: every email send will be sent with message at bottom "Send with<a href=''> I-Send-you-email</a>"
            <br />
            <a href=''>Source Here</a>
          </div>
        </div>
      </div>
    )
  }
}
