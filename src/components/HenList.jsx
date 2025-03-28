import React from 'react';
import HenCard from './HenCard';

function HenList() {
  // Eksempeldata for hønene. Erstatt gjerne med ekte data!
  const henData = [
    {
      image: 'https://via.placeholder.com/300',
      name: 'Klara',
      breed: 'Lohmann Brown',
      description: 'En vennlig og nysgjerrig høne som trives godt i hagen.'
    },
    {
      image: 'https://via.placeholder.com/300',
      name: 'maja',
      breed: 'Plymouth Rock',
      description: 'Rolig og barnevennlig høne som legger store, brune egg.'
    },
    {
      image: 'https://via.placeholder.com/300',
      name: 'Berta',
      breed: 'Silkehøne',
      description: 'Kjent for sin fluffy fjærdrakt og rolige temperament.'
    },
    {
        image: 'https://via.placeholder.com/300',
        name: 'tuppa',
        breed: 'Silkehøne',
        description: 'Kjent for sin fluffy fjærdrakt og rolige temperament.'
    }
    // Legg til flere høner her
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {henData.map((hen, index) => (
          <HenCard
            key={index}
            image={hen.image}
            name={hen.name}
            breed={hen.breed}
            description={hen.description}
          />
        ))}
      </div>
    </div>
  );
}

export default HenList;
