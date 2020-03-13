import { favCatReducer } from '../components/FavsComponent/reducers';
import { catsReducer } from '../components/HomeComponent/reducers';

const mainReducer = ({ cats, favCat }, action) => ({
  cats: catsReducer(cats, action),
  favCat: favCatReducer(favCat, action),
});

export {
  mainReducer,
};
