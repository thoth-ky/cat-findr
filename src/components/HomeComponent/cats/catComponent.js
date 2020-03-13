import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import isEmpty from 'is-empty';
import Img from 'react-image';
import PropTypes from 'prop-types';
import Loader from '../../shared/Loader';


function CatComponent({ image, display }) {
  const {
    id,
    url,
    breeds = [],
  } = image;

  const {
    name: breedName = 'Not Available',
    description = 'Not Available',
  } = (breeds && breeds[0]) || {};


  const { expand = false } = display;

  if (isEmpty(image)) {
    return (
      <Loader />
    );
  }

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

  return (
    <Card style={{ width: '60rem' }} key={id} className="text-center">
      <Card.Img as={Img} variant="top" height="500px" src={url} style={{ objectFit: 'contain' }} loader={<Loader />} />
      <Card.Body>
        <Card.Text as="div">
          <b>Breed</b>
          {' '}
          :
          {breedName}
          <br />
          <b>Description</b>
          {' '}
          :
          <i>{description}</i>
          {!isEmpty(breeds) && expand && <ExtraDetails breed={breeds[0]} />}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

CatComponent.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
    breeds: PropTypes.array,
  }).isRequired,
  display: PropTypes.shape({
    expand: PropTypes.bool,
  }).isRequired,
};

export { CatComponent };
