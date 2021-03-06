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
      <div style={{ fontSize: '20px', fontFamily: 'Heebo' }}>
        You Like it? Click
        {' '}
        <b style={{ color: 'green' }}>Yap</b>
        {' '}
        to like, or
        {' '}
        <b style={{ color: 'red' }}>Nop</b>
        {' '}
        to dislike.
      </div>
      <CatComponent image={currentImage} display={display} width="60rem" imgHeight="500px" />
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
