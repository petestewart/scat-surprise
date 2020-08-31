import React from 'react';

import Bird from '../Bird/Bird';

import './AllBirds.scss';

const AllBirds = (props) => {
  const birdCards = (allBirds) => {
    const birdList = allBirds.map((bird) => <Bird bird={bird} />);
    return birdList;
  };

  return (
    <div className="AllBirds">
      <h1>All Birds</h1>
      <div className="birdList">
        {birdCards(props.birds)}
      </div>
    </div>
  );
};

export default AllBirds;
