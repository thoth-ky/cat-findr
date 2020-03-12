import React, {useEffect} from 'react';
import Card from 'react-bootstrap/Card'

function CatComponent({image={}, display={}}){
  const {
    id,
    width,
    height,
    url,
    breeds=[],
  } = image;


  const { id: breedID, name: breedName, description, origin, life_span, } = {} || breeds && breeds[0]
  const { expand = false } = display;

  
  return (
    <Card  style={{width: '40rem'}} key={id} className="text-center">
      <Card.Img variant="top" width='40rem'  height='400px' src={url}/>
      <Card.Body>
        <Card.Text>
          <b>Breed : {breedName}</b>
          <br/>
          <i>Description : {description}</i>
        </Card.Text>
      </Card.Body>
    </Card>
  )

}

export { CatComponent }
