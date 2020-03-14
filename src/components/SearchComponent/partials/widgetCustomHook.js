import { useStore } from '../../../store/store';

function WidgetCustomHook() {
  const state = useStore()[0];

  const {
    searchResults,
  } = state;

  const favoriteImage = (imageId) => {
    const voteString = `${localStorage.getItem('LIKES')}, ${imageId}`;
    localStorage.setItem('LIKES', voteString);
  };


  const display = { expand: false, body: false };

  return {
    searchResults,
    display,
    favoriteImage,
  };
}

export {
  WidgetCustomHook as default,
};
