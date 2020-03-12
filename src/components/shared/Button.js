import React from 'react';
import Button from 'react-bootstrap/Button';

function ButtonComponent({buttonType, message, size, onClickEvent}) {
  return(
  <Button
    size={size}
    style={{margin: '10px'}}
    variant={buttonType}
    onClick={onClickEvent}
  >
    {message}
  </Button>
  )
}

export {
  ButtonComponent
}