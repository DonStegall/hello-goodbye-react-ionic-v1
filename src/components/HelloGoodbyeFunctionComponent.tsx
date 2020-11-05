import React, { ChangeEvent, useState } from 'react';
import { IonButton, IonInput, IonLabel } from '@ionic/react';
import './HelloGoodbye.css';
import logo from '../assets/logo.svg'; // move to a better location


interface ContainerProps {
}


const HelloGoodbyeFunctionComponent: React.FC<ContainerProps> = () => {

  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const handleClickMessage = () => {
    alert(value);
  }

  return (
    <div className="container">

      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <p>
          <label>
            Input:<br></br>
            <input type="text" value={value} onChange={handleChange}></input>
          </label>
        </p>

      <p>
        <IonButton disabled={!value} onClick={handleClickMessage}>Show Input Message</IonButton>
      </p>

    </div>
  );
};

export default HelloGoodbyeFunctionComponent;


