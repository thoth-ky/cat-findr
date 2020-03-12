import React, {useEffect} from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import isEmpty from 'is-empty';

function CatComponent({image={}, display={}}){
  const {
    id,
    url,
    breeds=[],
  } = image;

  const { 
    name: breedName = 'Not Available',
    description = 'Not Available',
  } = (breeds && breeds[0]) || {}


  const { expand = false } = display;

  if (isEmpty(image)){
    return (
      <Card.Text>
        Loading Image...
      </Card.Text>
    )
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
    } = (breeds && breeds[0]) || {}
    return (
      <Card key={breedID}>
        <ListGroup variant="flush">
          <ListGroup.Item>Origin          : {origin}</ListGroup.Item>
          <ListGroup.Item>Life Span       : {lifeSpan}</ListGroup.Item>
          <ListGroup.Item>Dog Friendly    : {dogFriendly}</ListGroup.Item>
          <ListGroup.Item>Adaptability    : {adaptability}</ListGroup.Item>
          <ListGroup.Item>Child Friendly  : {childFriendly}</ListGroup.Item>
          <ListGroup.Item>Affection Level : {affectionLevel}</ListGroup.Item>
          <ListGroup.Item>Energy Level    : {energyLevel}</ListGroup.Item>
          <ListGroup.Item>Grooming        : {grooming}</ListGroup.Item>
        </ListGroup>
      </Card>
    )
  }
  return (
    <Card  style={{width: '40rem'}} key={id} className="text-center">
      <Card.Img variant="top" width='40rem'  height='400px' src={url}/>
      <Card.Body>
        <Card.Text as='div'>
          <b>Breed</b> : {breedName}
          <br/>
          <b>Description</b> : <i>{description}</i>
          {!isEmpty(breeds) && expand &&  <ExtraDetails breed={breeds[0]}/>}
        </Card.Text>
      </Card.Body>
    </Card>
  )

}

export { CatComponent }
