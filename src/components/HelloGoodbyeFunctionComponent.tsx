import React, { ChangeEvent, useState } from 'react';
// import logo from './logo.svg';
import './HelloGoodbye.css';
import { IonButton, IonInput, IonLabel } from '@ionic/react';


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

      <strong>Hello Goodbye React Ionic V1</strong>

      <p>{value}</p>

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


