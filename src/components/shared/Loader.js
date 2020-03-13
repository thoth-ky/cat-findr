import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const Loader = ({ msg }) => (
  <Card.Text
    as="div"
    style={{
      minHeight: '500px', textAlign: 'center', verticalAlign: 'middle', lineHeight: '500px',
    }}
  >
    <b>{msg}</b>
  </Card.Text>
);

Loader.propTypes = {
  msg: PropTypes.string,
};

Loader.defaultProps = {
  msg: 'Loading Image...',
};
export default Loader;
