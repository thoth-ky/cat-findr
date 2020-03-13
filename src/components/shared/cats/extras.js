import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ExtraDetails = (breed) => {
  const {
    id: breedID,
    origin,
    life_span: lifeSpan,
    adaptability,
    affection_level: affectionLevel,
    child_friendly: childFriendly,
    dog_friendly: dogFriendly,
    energy_level: energyLevel,
    grooming,
  } = breed;
  return (
    <Card key={breedID}>
      <ListGroup variant="flush">
        <ListGroup.Item>
          Origin          :
          {origin}
        </ListGroup.Item>
        <ListGroup.Item>
          Life Span       :
          {lifeSpan}
        </ListGroup.Item>
        <ListGroup.Item>
          Dog Friendly    :
          {dogFriendly}
        </ListGroup.Item>
        <ListGroup.Item>
          Adaptability    :
          {adaptability}
        </ListGroup.Item>
        <ListGroup.Item>
          Child Friendly  :
          {childFriendly}
        </ListGroup.Item>
        <ListGroup.Item>
          Affection Level :
          {affectionLevel}
        </ListGroup.Item>
        <ListGroup.Item>
          Energy Level    :
          {energyLevel}
        </ListGroup.Item>
        <ListGroup.Item>
          Grooming        :
          {grooming}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};


export { ExtraDetails as default };
