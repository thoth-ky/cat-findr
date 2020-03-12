import { catsReducer } from '../components/HomeComponent/reducers'

const mainReducer = ({ cats}, action) => ({
  cats: catsReducer(cats, action),
});

export {
  mainReducer
}