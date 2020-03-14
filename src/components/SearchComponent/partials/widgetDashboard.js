import React from 'react';
import Button from 'react-bootstrap/Button';
import WidgetCustomHook from './widgetCustomHook';
import { ButtonComponent, CatComponent } from '../../shared';

function WidgetImagesDashboard() {
  const {
    searchResults,
    display,
    favoriteImage,
  } = WidgetCustomHook();

  return (
    <div
      className="dashboard"
      style={{
        height: '600px',
        width: '100%',
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      {
        searchResults.map((image) => (
          <div style={{ padding: '1%' }} key={image.id}>
            <CatComponent image={image} display={display} width="35rem" />
            <ButtonComponent
              message="Fav It"
              buttonType="success"
              size="lg"
              onClickEvent={(e) => favoriteImage(image.id)}
              name="fav-it"
              id={image.id}
              style={{ width: '100%' }}
            />
          </div>
        ))
      }
    </div>
  );
}

export {
  WidgetImagesDashboard as default,
};
