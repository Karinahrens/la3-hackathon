import React from 'react';

  const SuperCards = ({ name, image }) => {
  return (
    <div className="superhero-card">
      <h2>{name}</h2>
      <img src={image} alt={name} />
    </div>
  );
};

export default SuperCards;