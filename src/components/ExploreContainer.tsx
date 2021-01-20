
import { IonAvatar } from '@ionic/react';
import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
  position?: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, position }) => {
  return (
    <div className="container">
      
      <div style={{ textAlign: "center", marginBottom: "12px" }}>
        <IonAvatar style={{ margin: "0 auto" }}>
          <img alt='' src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
        </IonAvatar>
      </div>

      <strong>{name}</strong>
      <p>{position}</p>
    </div>
  );
};

export default ExploreContainer;
