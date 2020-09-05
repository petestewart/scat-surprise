import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import birdShape from '../../../helpers/propz/birdShape';

import './Bird.scss';

const Bird = (props) => {
  const { bird, deleteBird } = props;

  const { color } = bird;

  const singleBirdLink = `/birbs/${bird.id}`;
  const editLink = `/edit/${bird.id}`;

  const deleteHandler = () => {
    deleteBird(bird.id);
  };

  return (
    <div className="Bird">
      <Card className="card">
        <CardBody style={{ border: `15px solid ${color}` }}>
          <CardTitle><h4 >{bird.type}</h4></CardTitle>
          <CardSubtitle className="CardSubtitle"></CardSubtitle>
          <CardText>
            <Link to={singleBirdLink} params={{ hello: 'hello' }}><i className="fas fa-binoculars mx-4"></i></Link>
            <Link to={editLink}><i className="fas fa-edit mx-4"></i></Link>
            <i className="fas fa-trash-alt mx-4 text-primary" onClick={deleteHandler}></i>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

Bird.propTypes = {
  bird: birdShape.birbShape,
};

export default Bird;
