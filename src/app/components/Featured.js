import React from 'react';

const Featured = props => {
  var name = props.params.name;
  var specialty = props.params.specialty;

  return (
    <div className="main-content">
      <h2>Featured: {name}</h2>
      <p>Introducing <strong> {name} </strong>, a teacher who loves teaching courses about <strong> {specialty} </strong>!</p>
    </div>
  );
};

export default Featured;