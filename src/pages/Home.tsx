import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonLabel, IonItemOptions, IonItemSliding, IonButton } from '@ionic/react';
import React from 'react';
import './Home.css';

const arr = [
  {
    name: 'Yayang Setiyawan',
    desc: 'Nooobs'
  },
  {
    name: 'Faqih',
    desc: 'Proggramming Pro'
  },
  {
    name: 'Ade S',
    desc: 'Programming Pro'
  },
  {
    name: 'Skidiw1',
    desc: 'Programming Pro'
  },
  {
    name: 'Skidiw2',
    desc: 'Programming Pro'
  }
]

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>List View sliding</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {arr.map(elem => (
            <IonItemSliding key={elem.name}>
              <IonItem>
                <IonAvatar>
                  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"></img>
                </IonAvatar>
                <IonLabel class="view" className="ion-padding">
                  <h2>{elem.name}</h2>
                  <h3>{elem.desc}</h3>
                </IonLabel>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOptions onClick={() => alert('press')}>Delete</IonItemOptions>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>

        <IonButton>Next To cou</IonButton>
        <IonHeader collapse="condense">
        </IonHeader>
      </IonContent>
    </IonPage >
  );
};

export default Home;
