import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
  position?: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, position }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>{position}</p>
    </div>
  );
};

export default ExploreContainer;
