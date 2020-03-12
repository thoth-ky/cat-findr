import React from 'react';
import Button from 'react-bootstrap/Button';

function ButtonComponent({buttonType, message, size, onClickEvent, name}) {
  return(
  <Button
    size={size}
    style={{margin: '10px'}}
    variant={buttonType}
    onClick={onClickEvent}
    name={name}
  >
    {message}
  </Button>
  )
}

export {
  ButtonComponent
}