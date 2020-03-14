import React from 'react';
import CatsCustomHook from './catsCustomHook';
import { ButtonComponent, CatComponent } from '../shared';
import { Container, ButtonContainer } from '../shared/StyledComponents';

function HomeComponent() {
  const {
    currentImage,
    recordVote,
  } = CatsCustomHook();

  const display = { expand: false, body: true };

  return (
    <Container
      className="catWindow"
    >
      <CatComponent image={currentImage} display={display} width="60rem" />
      { !display.expand && (
      <ButtonContainer>
        <ButtonComponent message="Yap" buttonType="success" size="lg" onClickEvent={recordVote} name="like" />
        <ButtonComponent message="Nop" buttonType="danger" size="lg" onClickEvent={recordVote} name="dislike" />
      </ButtonContainer>
      )}

    </Container>
  );
}

export { HomeComponent };
