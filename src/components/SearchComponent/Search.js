import React from 'react';
import {
  ImagesDashboard,
  FilterComponent,
} from './partials';
import { Container } from '../shared/StyledComponents';


function SearchComponent() {
  return (
    <Container>
      <div style={{ fontSize: '20px', fontFamily: 'Heebo' }}>
        <b>Choose filters to use for searching for images</b>
        <p>
          If you like
          {' '}
          <b style={{ color: 'green' }}>Fav-It</b>
        </p>
      </div>
      <FilterComponent />
      <ImagesDashboard />
    </Container>
  );
}

export { SearchComponent };
