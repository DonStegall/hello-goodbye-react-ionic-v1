import React, { Component } from 'react';
// import logo from './logo.svg';
import './HelloGoodbye.css';
import { IonButton, IonInput, IonLabel } from '@ionic/react';


/// problem with this FC is the event handler and state / props

// interface ContainerProps {
//   textInput : string;
// }

// const HelloGoodbyeContainer: React.FC<ContainerProps> = ({textInput}) => {

//   const handleClickMessage = MouseEvent => {
//     alert(event.target.value);
//   }

//   return (
//     <div className="container">
//       <strong>Hello Goodbye React Ionic V1</strong>
//       <p>{textInput}</p>
//       <p>
//           <button value={textInput} onClick={handleClickMessage}>Show Input Message</button>
//         </p>
//     </div>
//   );
// };

// export default HelloGoodbyeContainer;


// class HelloGoodbyeContainer extends Component<any, any> {
//   constructor(props: any){
//     super(props);
//     this.state = {value: ''};
// }

//   public render() {
//       return (
//           <div>
//             <strong>Hello Goodbye React Ionic V1 - Component</strong>
//           </div>
//       );
//   }
// }

// export default HelloGoodbyeContainer;


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

            <strong>React logo will go here</strong>

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

