import { useToasts } from 'react-toast-notifications';
import { useStore } from '../../../store/store';

function WidgetCustomHook() {
  const state = useStore()[0];
  const { addToast } = useToasts();

  const {
    searchResults,
  } = state;

  const favoriteImage = (imageId) => {
    const voteString = `${localStorage.getItem('LIKES')}, ${imageId}`;
    localStorage.setItem('LIKES', voteString);
    addToast('Favorited Image Successfully', {
      appearance: 'success',
      autoDismiss: true,
      placement: 'top-center',
    });
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
