import React, { ChangeEvent, useState } from 'react';
import { IonButton, IonInput, IonLabel, IonAlert
 } from '@ionic/react';
import './HelloGoodbye.css';
import logo from '../assets/logo.svg'; // move to a better location


interface ContainerProps {
}


const HelloGoodbyeFunctionComponent: React.FC<ContainerProps> = () => {

  const [value, setValue] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const handleClickHello = () => {
    setValue('Hello');
  }

  const handleClickGoodbye = () => {
    setValue('Goodbye');
  }

  const handleClickUpperCase = () => {
    setValue(value.toUpperCase());
  }

  const handleClickLowerCase = () => {
    setValue(value.toLowerCase());
  }

  const handleClickMessage = () => {
    alert(value);
  }

  const handleClickClear = () => {
    setValue('');
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
        <IonButton onClick={handleClickHello}>Hello</IonButton>
      </p>

      <p>
        <IonButton onClick={handleClickGoodbye}>Goodbye</IonButton>
      </p>

      <p>
        <IonButton disabled={!value}  onClick={handleClickUpperCase}>Upper Case</IonButton>
      </p>

      <p>
        <IonButton disabled={!value}  onClick={handleClickLowerCase}>Lower Case</IonButton>
      </p>

      <p>
        <IonButton disabled={!value} onClick={() => setShowInput(true)} expand="block">Show Input Message</IonButton>
      </p>

      <p>
        <IonButton disabled={!value} onClick={handleClickClear}>Clear Input Message</IonButton>
      </p>

      <IonAlert
          isOpen={showInput}
          onDidDismiss={() => setShowInput(false)}
          header={'Input Contents'}
          subHeader={'Value of Input field is:'}
          message={value}
          buttons={['OK']}
          />

    </div>
  );
};

export default HelloGoodbyeFunctionComponent;


