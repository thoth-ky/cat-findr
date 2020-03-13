import React from 'react';
import Card from 'react-bootstrap/Card';
import isEmpty from 'is-empty';
import Img from 'react-image';
import PropTypes from 'prop-types';
import ExtraDetails from './extras';
import Loader from '../Loader';


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

export { CatComponent as default };
