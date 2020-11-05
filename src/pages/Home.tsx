import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
// import ExploreContainer from '../components/ExploreContainer';
import HelloGoodbyeComponent from '../components/HelloGoodbyeComponent';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello Goodbye</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Hello Goodbye</IonTitle>
          </IonToolbar>
        </IonHeader>
        <HelloGoodbyeComponent />
        {/* <HelloGoodbyeContainer textInput={"Hello Donald"} /> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
