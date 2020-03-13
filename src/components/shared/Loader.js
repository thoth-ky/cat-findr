import React from 'react';
import Card from 'react-bootstrap/Card';

const Loader = () => (
  <Card.Text
    as="div"
    style={{
      minHeight: '500px', textAlign: 'center', verticalAlign: 'middle', lineHeight: '500px',
    }}
  >
    <b>Loading Image...</b>
  </Card.Text>
);

export default Loader;
