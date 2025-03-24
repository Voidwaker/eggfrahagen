import React from 'react';

function HenCard({ image, name, breed, description }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle text-muted mb-2">{breed}</h6>
          <p className="card-text">{description}</p>
          <button className="btn btn-primary">Les mer</button>
        </div>
      </div>
    </div>
  );
}

export default HenCard;
