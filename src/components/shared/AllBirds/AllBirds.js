import React from 'react';

import Bird from '../Bird/Bird';

const AllBirds = (props) => {
  const birdCards = (allBirds) => {
    const birdList = allBirds.map((bird) => <Bird bird={bird} />);
    return birdList;
  };

  return (
    <>
      <h1>All Birds</h1>
      {birdCards(props.birds)}
    </>
  );
};

export default AllBirds;
