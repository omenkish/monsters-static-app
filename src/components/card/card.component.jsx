import React from 'react';

import './card.styles.scss';
export const Card = ({ monster }) => (
  <div className="card-container">
    <img src={`https://robohash.org/${monster.id}?ste=set2&size=180x180`} alt="monster" />
    <h1>{monster.name}</h1>
    <h3>{monster.email}</h3>
  </div>
);
