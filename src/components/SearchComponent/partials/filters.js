import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { FilterCustomHook } from './filterHooks';

function OptionComponent({ option }) {
  return (
    <option value={option[0]}>
      {option[1]}
    </option>
  );
}

function SelectComponent({
  options, name, onChange, multiple,
}) {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{name}</Form.Label>
      <Form.Control as="select" onChange={(e) => onChange(e.target.value)} multiple={multiple}>
        {
          options.map((el) => (<OptionComponent key={el[0]} option={el} />))
        }
      </Form.Control>
    </Form.Group>

  );
}

function FiltersComponent() {
  const {
    orderOptions,
    typeOptions,
    categoryOptions,
    breedOptions,
    updateOrder,
    updateType,
    updateCategory,
    updateBreed,
  } = FilterCustomHook();


  return (
    <Form className="filters" style={{ width: '100%', height: '150px' }}>
      <Form.Row>
        <Col>
          <SelectComponent options={orderOptions} onChange={updateOrder} name="Order" />
        </Col>
        <Col>
          <SelectComponent options={typeOptions} onChange={updateType} name="Type" />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <SelectComponent options={categoryOptions} onChange={updateCategory} name="Category" />
        </Col>
        <Col>
          <SelectComponent options={breedOptions} onChange={updateBreed} name="Breeds" />
        </Col>
      </Form.Row>
    </Form>
  );
}

SelectComponent.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.any.isRequired,
    ),
  ).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
};

SelectComponent.defaultProps = {
  multiple: false,
};

OptionComponent.propTypes = {
  option: PropTypes.arrayOf(
    PropTypes.any.isRequired,
  ).isRequired,
};


export {
  FiltersComponent as default,
};
