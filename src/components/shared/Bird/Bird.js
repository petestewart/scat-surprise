import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';

const Bird = (props) => {
  const { bird } = props;

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{bird.type}</CardTitle>
          <CardSubtitle>{bird.color}, {bird.size}</CardSubtitle>
          <CardText>
            <ul>
            <li>seen at: {bird.seenAt}</li>
            <li>alternate color: {bird.altColor}</li>
            <li>{bird.wasSleeping ? 'was sleeping' : 'was awake'}</li>
            <li>location: {bird.location}</li>
            <li>notes: {bird.notes}</li>
            </ul>
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Bird;
