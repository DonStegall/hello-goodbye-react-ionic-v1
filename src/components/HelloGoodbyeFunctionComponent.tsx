import React, { ChangeEvent } from 'react';
// import logo from './logo.svg';
import './HelloGoodbye.css';
import { IonButton, IonInput, IonLabel } from '@ionic/react';


// problem with this FC is the event handler and state / props

interface ContainerProps {
  textInput : string;
}

const HelloGoodbyeFunctionComponent: React.FC<ContainerProps> = ({textInput}) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // this.setState({value: event.target.value});
    // alert(event.target.value);
    textInput = event.target.value;
  }

  const handleClickMessage = () => {
    alert(textInput);
  }

  return (
    <div className="container">

      <strong>Hello Goodbye React Ionic V1</strong>

      <p>{textInput}</p>

      <p>
          <label>
            Input:<br></br>
            <input type="text" onChange={handleChange}></input>
          </label>
        </p>

      <p>
        <IonButton disabled={!textInput} onClick={handleClickMessage}>Show Input Message</IonButton>
      </p>

    </div>
  );
};

export default HelloGoodbyeFunctionComponent;


