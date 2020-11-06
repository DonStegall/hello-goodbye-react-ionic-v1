import React, { Component } from 'react';
import { IonButton, IonInput, IonLabel, IonAlert } from '@ionic/react';
import './HelloGoodbye.css';
import logo from '../assets/logo.svg'; // move to a better location

class HelloGoodbyeComponent extends Component<any, any> {

  constructor(props: any){
    super(props);

    this.state = {
      textInput: '',
      showInput: false
    };
  }

  handleChange(event:any) {
    this.setState({textInput: event.target.textInput});
  }

  handleClickHello = () => {
    this.setState({textInput: 'Hello'});
  }

  handleClickGoodbye = () => {
    this.setState({textInput: 'Goodbye'});
  }

  handleClickUpperCase = () => {
    this.setState({textInput: this.state.textInput.toUpperCase()});
  }

  handleClickLowerCase = () => {
    this.setState({textInput: this.state.textInput.toLowerCase()});
  }

  handleClickMessage = () => {
    alert(this.state.textInput);
  }

  handleClickClear = () => {
    this.setState({textInput: ''});
  }

  render() {
      return (
          <div className="container">

            <div>
              <img src={logo} className="App-logo" alt="logo" />
            </div>

            <p>
              HelloGoodbyeComponent
            </p>

            <p>
              <IonLabel>
                Input:<br></br>
                <input type="text" value={this.state.textInput} onChange={this.handleChange.bind(this)} />
              </IonLabel>
            </p>

            <p>
              <IonButton onClick={this.handleClickHello}>Hello</IonButton>
            </p>

            <p>
              <IonButton onClick={this.handleClickGoodbye}>Goodbye</IonButton>
            </p>

            <p>
              <IonButton disabled={!this.state.textInput}  onClick={this.handleClickUpperCase}>Upper Case</IonButton>
            </p>

            <p>
              <IonButton disabled={!this.state.textInput}  onClick={this.handleClickLowerCase}>Lower Case</IonButton>
            </p>

            <p>
              <IonButton disabled={!this.state.textInput}  onClick={() => this.setState({showInput: true})} expand="block">Show Input Message</IonButton>
            </p>

            <p>
              <IonButton disabled={!this.state.textInput} onClick={this.handleClickClear}>Clear Input Message</IonButton>
            </p>

            <IonAlert
              isOpen={this.state.showInput}
              onDidDismiss={() => this.setState({showInput: false})}
              header={'Input Contents'}
              subHeader={'value of input field is:'}
              message={this.state.textInput}
              buttons={['OK']}
              />

        </div>
      );
  }

}

export default HelloGoodbyeComponent;

