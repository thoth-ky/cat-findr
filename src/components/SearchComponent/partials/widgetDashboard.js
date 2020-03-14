import React from 'react';
import isEmpty from 'is-empty';
import WidgetCustomHook from './widgetCustomHook';
import { ButtonComponent, CatComponent, Loader } from '../../shared';

function WidgetImagesDashboard() {
  const {
    searchResults,
    display,
    favoriteImage,
  } = WidgetCustomHook();

  if (isEmpty(searchResults)) {
    return (
      <Loader msg="No Image Result for set filters" />
    );
  }

  return (
    <div
      className="dashboard"
      style={{
        height: '100%',
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
            <CatComponent image={image} display={display} width="30rem" imgHeight="300px" />
            <ButtonComponent
              message="Fav It"
              buttonType="success"
              size="lg"
              onClickEvent={() => favoriteImage(image.id)}
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
