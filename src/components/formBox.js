import React, {Component} from 'react';
import '../style/sass/formBox.css';
import Loading from './loading';

export default class FormBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      emailValue: '',
      emailClass: '',
      subjectValue: '',
      subjectClass: '',
      messageValue: '',
      messageClass: '',
      formState: 'form-box',
      isLoading: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubject = this.handleSubject.bind(this);
    this.handleText = this.handleText.bind(this);
  }

  handleSubmit(event){
    if(this.state.emailClass === 'good' && this.state.messageClass === 'good'){
      this.setState({isLoading: true})
      this.props.submitChange(true);
      // https://josueemail.herokuapp.com/email
      // http://localhost:8181/email
      fetch('https://josueemail.herokuapp.com/email', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.emailValue,
          subject: this.state.subjectValue,
          message: this.state.messageValue,
        })
      }).then((responce) =>{
        if(responce.ok){
          this.setState({isLoading: false});
          this.props.submitChange(false);

        }
      })
    }
    else{
      this.setState({
        formState: 'form-box shake',
        isLoading: false,
      })
      setTimeout(()=> {this.setState({formState: 'form-box'})}, 200)
    }
    event.preventDefault();
  }

  handleEmail(event){
    // https://www.w3resource.com/javascript/form/email-validation.php
    // email regex (no time wasted for me.....)
    let emailClass = 'good';
    if(event.target.value.length === 0 || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value))){
      emailClass = 'error';
    }
    this.setState({
      emailValue: event.target.value,
      emailClass: emailClass,
    })
  }

  handleSubject(event){
    this.setState({
      subjectValue: event.target.value,
      subjectClass: event.target.value.length === 0 ? 'error' : 'good'
    })
  }

  handleText(event){
    this.setState({
      messageValue: event.target.value,
      messageClass: event.target.value.length === 0 ? 'error' : 'good'
    })
  }

  render(){
    const style={
      display: this.state.isLoading ? 'none' : 'block',
    }
    return(
      <div className='form-box-wrapper'>
        <Loading isLoading={this.state.isLoading}/>
        <div className={this.state.formState} style={style}>
          <div className='title'>
            I-Send-You-Email
          </div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <div>E-mail</div>
              <input type='email' value={this.state.emailValue} onChange={this.handleEmail} className={this.state.emailClass} placeholder='example@example.com'></input>
            </label>
            <label>
              <div>Subject</div>
              <input type='text' value={this.state.subjectValue} onChange={this.handleSubject} className={this.state.subjectClass} placeholder='ie. sports, space, etc'></input>
            </label>
            <label>
              <div>Message</div>
              <textarea rows='3' value={this.state.messageValue} onChange={this.handleText} className={this.state.messageClass} placeholder='ie. Hello!'></textarea>
            </label>
            <input onClick={this.handleSubmit} className='submit' type="submit" value="Submit" />
          </form>
          <div className='tiny-text'>
            Note: every email send will be sent with message at bottom "Send with<a href=''> I-Send-you-email</a>"
            <br />
            <a href='https://github.com/josuerojasrojas/I-send-you-email-front'>Source Here</a>
          </div>
        </div>
      </div>
    )
  }
}
