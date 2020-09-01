import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import './Bird.scss';

const Bird = (props) => {
  const { bird } = props;

  const { color } = bird;

  const singleBirdLink = `/birbs/${bird.id}`;
  const editLink = `/edit/${bird.id}`;

  return (
    <div className="Bird">
      <Card className="card">
        <CardBody>
          <CardTitle><h4>{bird.type}</h4></CardTitle>
          <CardSubtitle className="CardSubtitle"><span style={{ color }}>{bird.color}</span>, {bird.size}</CardSubtitle>
          <CardText>
            <ul>
            <li>seen at: {bird.seenAt}</li>
            <li>alternate color: {bird.altColor}</li>
            <li>{bird.wasSleeping ? 'was sleeping' : 'was awake'}</li>
            <li>location: {bird.location}</li>
            <li>notes: {bird.notes}</li>
            </ul>
            <Link to={singleBirdLink}><i className="fas fa-binoculars mx-4"></i></Link>
            <Link to={editLink}><i className="fas fa-edit mx-4"></i></Link>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Bird;
