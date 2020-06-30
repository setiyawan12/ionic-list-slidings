import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonLabel, IonItemOptions, IonItemSliding } from '@ionic/react';
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
          <IonTitle>Latihan1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {arr.map(elem => (
            <IonItemSliding key={elem.name}>
              <IonItem>
                <IonAvatar>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCo3JjSfJjrXREp0A4AiBN5yFKGoS0VyygjA&usqp=CAU"></img>
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
        <IonHeader collapse="condense">
        </IonHeader>
      </IonContent>
    </IonPage >
  );
};

export default Home;
