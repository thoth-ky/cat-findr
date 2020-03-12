import { useState, useEffect } from 'react';
import { useStore } from '../../store/store';
import isEmpty from 'is-empty';
import { getRandomCatsAction } from './actions/HomeActions';

const  CatsCustomHook = () => {
  const [currentImage, setCurrentImage ] = useState({});
  const [state, dispatch] = useStore()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [fetchBatch, setFetchBacth] = useState(false)

  const { cats: allCatsData = [] } = state;
  console.log({allCatsData})

  useEffect(() => {
    const params = {
      limit: 100,
      format: 'json',
      has_breeds: true,
      mime_types: 'jpg, png',
      size: 'med',
    }
    getRandomCatsAction(dispatch, params)
  },[dispatch, fetchBatch]);
  
  const nextPhoto = () =>{
    if(currentImage){
      const nextIndex = currentImageIndex + 1;
      if(nextIndex === allCatsData.length){
        setFetchBacth(true)
      } 
      setCurrentImage(allCatsData[nextIndex])
      setCurrentImageIndex(nextIndex)
    }
  }

  const recordVote = (event) => {
    const action = event.target.name;
    let VOTE_KEY;
    if(action === 'like'){
      VOTE_KEY = 'LIKES'
    } else if( action==='dislike'){
      VOTE_KEY = 'DISLIKES'
    }

    const { id } = currentImage;
    
    const voteString = `${localStorage.getItem(VOTE_KEY)}, ${id}`;

    console.log({VOTE_KEY}, voteString.length)
    localStorage.setItem(VOTE_KEY, voteString)
    nextPhoto()
  }

  if(isEmpty(currentImage) && !isEmpty(allCatsData)){
    setCurrentImage(allCatsData[0]);
    setCurrentImageIndex(0);
  }
  
  return {
    state,
    allCatsData,
    currentImage,
    setCurrentImage,
    recordVote,
    currentImageIndex,
  }
}

export default CatsCustomHook;