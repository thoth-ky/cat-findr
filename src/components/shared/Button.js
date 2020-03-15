import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function ButtonComponent({
  buttonType, message, size, onClickEvent, name,
}) {
  return (
    <Button
      size={size}
      style={{ margin: '10px', width: '200px' }}
      variant={buttonType}
      onClick={onClickEvent}
      name={name}
    >
      {message}
    </Button>
  );
}


ButtonComponent.propTypes = {
  buttonType: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  onClickEvent: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
export {
  ButtonComponent as default,
};
