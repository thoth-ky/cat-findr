import React from 'react';
import isEmpty from 'is-empty';
import { FavCatHook } from './FavsCustomHook';
import { CatComponent, Loader, ButtonComponent } from '../shared';
import { Container } from '../shared/StyledComponents';

function FavsComponent() {
  const {
    favCat,
    navigateFavs,
  } = FavCatHook();

  const display = { expand: false, body: true };
  if (isEmpty(favCat)) {
    return (<Loader msg="No favorites yet, swipe first" />);
  }

  return (
    <Container style={{ flexDirection: 'row' }}>
      <ButtonComponent message="PREV" buttonType="primary" size="lg" onClickEvent={navigateFavs} name="prev" />
      <CatComponent image={favCat} display={display} width="80rem" imgHeight="600px" />
      <ButtonComponent message="NEXT" buttonType="primary" size="lg" onClickEvent={navigateFavs} name="next" />
    </Container>
  );
}

export { FavsComponent };
