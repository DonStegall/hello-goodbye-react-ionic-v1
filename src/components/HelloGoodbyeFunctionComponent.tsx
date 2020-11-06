import React, { ChangeEvent, useState } from 'react';
import { IonButton, IonInput, IonLabel, IonAlert } from '@ionic/react';
import './HelloGoodbye.css';
import logo from '../assets/logo.svg'; // move to a better location


interface ContainerProps {
}


const HelloGoodbyeFunctionComponent: React.FC<ContainerProps> = () => {

  const [textInput, setTextInput] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
  }

  const handleClickHello = () => {
    setTextInput('Hello');
  }

  const handleClickGoodbye = () => {
    setTextInput('Goodbye');
  }

  const handleClickUpperCase = () => {
    setTextInput(textInput.toUpperCase());
  }

  const handleClickLowerCase = () => {
    setTextInput(textInput.toLowerCase());
  }

  const handleClickMessage = () => {
    alert(textInput);
  }

  const handleClickClear = () => {
    setTextInput('');
  }

  return (
    <div className="container">

      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <p>
        HelloGoodbyeFunctionComponent
      </p>

      <p>
        <IonLabel>
          Input:<br></br>
          <input type="text" value={textInput} onChange={handleChange}></input>
        </IonLabel>
      </p>

      <p>
        <IonButton onClick={handleClickHello}>Hello</IonButton>
      </p>

      <p>
        <IonButton onClick={handleClickGoodbye}>Goodbye</IonButton>
      </p>

      <p>
        <IonButton disabled={!textInput}  onClick={handleClickUpperCase}>Upper Case</IonButton>
      </p>

      <p>
        <IonButton disabled={!textInput}  onClick={handleClickLowerCase}>Lower Case</IonButton>
      </p>

      <p>
        <IonButton disabled={!textInput} onClick={() => setShowInput(true)} expand="block">Show Input Message</IonButton>
      </p>

      <p>
        <IonButton disabled={!textInput} onClick={handleClickClear}>Clear Input Message</IonButton>
      </p>

      <IonAlert
          isOpen={showInput}
          onDidDismiss={() => setShowInput(false)}
          header={'Input Contents'}
          subHeader={'value of input field is:'}
          message={textInput}
          buttons={['OK']}
          />

    </div>
  );
};

export default HelloGoodbyeFunctionComponent;


