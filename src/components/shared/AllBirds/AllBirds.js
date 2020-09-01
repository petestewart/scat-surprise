import React from 'react';

import Bird from '../Bird/Bird';

import './AllBirds.scss';

const AllBirds = (props) => {
  const birdCards = (allBirds) => {
    const birdList = allBirds.map((bird) => <Bird bird={bird} key={bird.id} />);
    return birdList;
  };

  return (
    <div className="AllBirds">
      <div className="allBirdsTitle"><i className="fas fa-kiwi-bird fa-3x mx-5 text-info"></i><h1>All Birds</h1><i className="fas fa-dove fa-3x mx-5 text-warning"></i></div>
      <div className="birdList">
        {birdCards(props.birds)}
      </div>
    </div>
  );
};

export default AllBirds;
