import { favCatReducer } from '../components/FavsComponent/reducers';
import { catsReducer } from '../components/HomeComponent/reducers';
import { breedsReducer, searchReducer, categoriesReducer } from '../components/SearchComponent/reducer';

const mainReducer = ({
  cats, favCat, categories, searchResults, breeds,
}, action) => ({
  cats: catsReducer(cats, action),
  favCat: favCatReducer(favCat, action),
  categories: categoriesReducer(categories, action),
  searchResults: searchReducer(searchResults, action),
  breeds: breedsReducer(breeds, action),
});

export {
  mainReducer,
};
