import { useState, useEffect } from 'react';
import { useStore } from '../../store/store';
import { getRandomCatsAction } from './actions/HomeActions';

const  CatsCustomHook = () => {
  const [currentId, setCurrentId ] = useState(null);
  const [state, dispatch] = useStore()

  const { cats: { data: allCatsData = [] }} = state;
  console.log({allCatsData})

  useEffect(() => {
    const params = {
      limit: 3,
      format: 'json',
      has_breeds: true,
      mime_types: 'jpg, png',
      size: 'full',
    }
    getRandomCatsAction(dispatch, params)
  },[dispatch]);

  const nextPhoto = () =>{
    console.log('Going Next')
  }

  const recordYes =() => {
    console.log('Voted Yes')
    nextPhoto()

  }
  
  return {
    state,
    allCatsData,
    currentId,
    setCurrentId,
    nextPhoto,
    recordYes,
  }
}

export default CatsCustomHook;