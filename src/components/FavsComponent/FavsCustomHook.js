import { useEffect, useState } from 'react';
import isEmpty from 'is-empty';
import { getFavCatAction } from './actions/FavActions';
import { useStore } from '../../store/store';

function FavCatHook() {
  const [favorites, setFavorites] = useState([]);
  // const [current, setCurrent] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const [state, dispatch] = useStore();

  const { favCat } = state;

  useEffect(() => {
    const voteString = localStorage.getItem('LIKES');
    if (!isEmpty(voteString)) {
      const votes = voteString.split(',');
      const favs = [];
      votes.forEach((item) => {
        if (item !== 'null') {
          favs.push(item.trim());
        }
      });
      setFavorites([...new Set(favs)]);
    }
  }, []);

  useEffect(() => {
    if (!isEmpty(favorites)) {
      const currentCatId = favorites[currentIndex];
      const params = {
        has_breeds: true,
      };
      getFavCatAction(dispatch, currentCatId, params);
    }
  }, [currentIndex, dispatch, favorites]);

  const navigateFavs = (event) => {
    const { name } = event.target;
    let newIdx = 0;
    if (name === 'next') {
      newIdx = currentIndex + 1;
      if (newIdx === favorites.length) {
        newIdx = 0;
      }
    } else if (name === 'prev') {
      newIdx = currentIndex - 1;
      if (newIdx < 0) {
        newIdx = favorites.length - 1;
      }
    }
    setCurrentIndex(newIdx);
  };

  return {
    favorites,
    setFavorites,
    favCat,
    navigateFavs,
  };
}

export {
  FavCatHook,
};
