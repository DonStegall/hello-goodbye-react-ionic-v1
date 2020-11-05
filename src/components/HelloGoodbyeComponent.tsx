import React, { Component } from 'react';
import { IonButton, IonInput, IonLabel } from '@ionic/react';
import './HelloGoodbye.css';
import logo from '../assets/logo.svg'; // move to a better location

class HelloGoodbyeComponent extends Component<any, any> {
  constructor(props: any){
    super(props);
    this.state = {value: ''};
  }

  handleChange(event:any) {
    this.setState({value: event.target.value});
  }

  handleClickHello = () => {
    this.setState({value: 'Hello'});
  }

  handleClickGoodbye = () => {
    this.setState({value: 'Goodbye'});
  }

  handleClickMessage = () => {
    alert(this.state.value);
  }

  handleClickUpperCase = () => {
    this.setState({value: this.state.value.toUpperCase()});
  }

  handleClickLowerCase = () => {
    this.setState({value: this.state.value.toLowerCase()});
  }

  handleClickClear = () => {
    this.setState({value: ''});
  }

  render() {
      return (
          <div className="container">

            <div>
              <img src={logo} className="App-logo" alt="logo" />
            </div>

            <p>
              <IonLabel>
                Input:<br></br>
                <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
              </IonLabel>
            </p>

            <p>
              <IonButton onClick={this.handleClickHello}>Hello</IonButton>
            </p>

            <p>
              <IonButton onClick={this.handleClickGoodbye}>Goodbye</IonButton>
            </p>

            <p>
              <IonButton disabled={!this.state.value}  onClick={this.handleClickUpperCase}>Upper Case</IonButton>
            </p>

            <p>
              <IonButton disabled={!this.state.value}  onClick={this.handleClickLowerCase}>Lower Case</IonButton>
            </p>

            <p>
              <IonButton disabled={!this.state.value} onClick={this.handleClickMessage}>Show Input Message</IonButton>
            </p>

            <p>
              <IonButton disabled={!this.state.value} onClick={this.handleClickClear}>Clear Input Message</IonButton>
            </p>

        </div>
      );
  }

}

export default HelloGoodbyeComponent;

