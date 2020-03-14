import { useEffect, useState } from 'react';
import { useStore } from '../../../store/store';
import {
  getBreedsAction,
  getCategoriesAction,
  searchImagesAction,
} from '../actions/searchActions';

function FilterCustomHook() {
  const [state, dispatch] = useStore();

  const {
    categories = [],
    breeds = [],
  } = state;

  const [orderOptions, setOrderOptions] = useState([]);
  const [typeOptions, setTypeOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [breedOptions, setBreedOptions] = useState([]);

  const [order, updateOrder] = useState('Random');
  const [type, updateType] = useState('Static');
  const [category, updateCategory] = useState('');
  const [breed, updateBreed] = useState('');

  useEffect(() => {
    getBreedsAction(dispatch);
    getCategoriesAction(dispatch);
  }, [dispatch]);

  const selectFieldsFromObject = (list, fields, resultList) => {
    list.forEach((element) => {
      const option = [];
      fields.forEach((key) => {
        option.push(element[key]);
      });
      resultList.push(option);
    });
  };

  const searchImages = () => {
    const params = {
      breed_ids: breed,
      category_ids: category,
      order,
      mime_types: (type === 'Static') ? 'jpg,png' : 'gif',
      size: 'med',
      limit: 100,
    };

    searchImagesAction(dispatch, params);
  };

  const setFilterOptions = () => {
    const breedOpts = [['', 'All']];
    const categoryOpts = [['', 'All']];
    selectFieldsFromObject(breeds, ['id', 'name'], breedOpts);
    selectFieldsFromObject(categories, ['id', 'name'], categoryOpts);
    const orderOpts = [['Randon', 'Random'], ['Desc', 'Desc'], ['Asc', 'Asc']];
    const typeOpts = [['Static', 'Static'], ['Animated', 'Animated']];
    setOrderOptions(orderOpts);
    setTypeOptions(typeOpts);
    setCategoryOptions(categoryOpts);
    setBreedOptions(breedOpts);
  };

  useEffect(() => {
    searchImages();
    setFilterOptions();
  }, [order, type, category, breed, breeds, categories, dispatch]);

  return {
    categories,
    breeds,
    orderOptions,
    typeOptions,
    categoryOptions,
    breedOptions,
    updateOrder,
    updateType,
    updateCategory,
    updateBreed,
  };
}


export { FilterCustomHook };
