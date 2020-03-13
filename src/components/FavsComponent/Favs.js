import React from 'react';
import isEmpty from 'is-empty';
import { FavCatHook } from './FavsCustomHook';
import { CatComponent, Loader, ButtonComponent } from '../shared';
import { Container, ButtonContainer } from '../shared/StyledComponents';

function FavsComponent() {
  const {
    favCat,
    navigateFavs,
  } = FavCatHook();

  const display = { expand: false };
  if (isEmpty(favCat)) {
    return (<Loader msg="No favorites yet, swipe first" />);
  }

  return (
    <Container>
      <CatComponent image={favCat} display={display} />
      { !display.expand && (
      <ButtonContainer>
        <ButtonComponent message="PREV" buttonType="primary" size="lg" onClickEvent={navigateFavs} name="prev" />
        <ButtonComponent message="NEXT" buttonType="primary" size="lg" onClickEvent={navigateFavs} name="next" />
      </ButtonContainer>
      )}
    </Container>
  );
}

export { FavsComponent };
