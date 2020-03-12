import { useState, useEffect } from 'react';
import { useStore } from '../../store/store';
import { getRandomCatsAction } from './actions/HomeActions';

const  CatsCustomHook = () => {
  const [ready, setReady ] = useState();
  const [state, dispatch] = useStore()

  const { cats: { data: allCatsData }} = state;
  console.log({allCatsData})

  useEffect(() => {
    const params = {
      limit: 3,
    }
    getRandomCatsAction(dispatch, params)
  },[dispatch]);
  
  return {
    state,
    allCatsData,
    ready,
    setReady
  }
}

export default CatsCustomHook;