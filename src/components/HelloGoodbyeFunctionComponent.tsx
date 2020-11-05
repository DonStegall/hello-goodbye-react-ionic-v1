import React, { Component } from 'react';
// import logo from './logo.svg';
import './HelloGoodbye.css';
import { IonButton, IonInput, IonLabel } from '@ionic/react';


// problem with this FC is the event handler and state / props

interface ContainerProps {
  textInput : string;
}

const HelloGoodbyeFunctionComponent: React.FC<ContainerProps> = ({textInput}) => {

  const handleClickMessage = () => {
    alert("fix this ... event.target.value");
  }

  return (
    <div className="container">

      <strong>Hello Goodbye React Ionic V1</strong>

      <p>{textInput}</p>

      <p>
        <button value={textInput} onClick={handleClickMessage}>Show Input Message</button>
      </p>
      
    </div>
  );
};

export default HelloGoodbyeFunctionComponent;


