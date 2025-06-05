import React from 'react';
import HenCard from './HenCard';

function HenList() {
  // Eksempeldata for hønene. Erstatt gjerne med ekte data!!
  const henData = [
    {
      image: 'https://via.placeholder.com/300',
      name: 'Mia',
      breed: 'Brun Lohman',
      description: 'nyskjerrig og sosial høne, skal helst være med på alt du gjør i hagen. Legger brune egg.'
    },
    {
      image: 'https://via.placeholder.com/300',
      name: 'Pernille',
      breed: 'Brun Lohman',
      description: 'den tøffeste av de 3, men meget sosial og snill. Legger brune egg.'
    },
    {
      image: 'https://via.placeholder.com/300',
      name: 'Turi',
      breed: 'Brun Lohman',
      description: 'En vennlig og nysgjerrig høne som trives godt i hagen. legger brune egg.'
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
