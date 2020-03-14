import React from 'react';
import {
  ImagesDashboard,
  FilterComponent,
} from './partials';
import { Container } from '../shared/StyledComponents';


function SearchComponent() {
  return (
    <Container>
      <FilterComponent />
      <ImagesDashboard />
    </Container>
  );
}

export { SearchComponent };
