import React, {useEffect} from 'react';
import CatsCustomHook from './catsCustomHook'
import { CatComponent } from './cats/catComponent';
import {ButtonComponent} from '../shared/Button';


function HomeComponent () {
  const {
    allCatsData,
    nextPhoto,
    recordYes,
  } = CatsCustomHook();
  
  const image = allCatsData && allCatsData[0];
  const display =  { expand:true };
  

  useEffect(() => {
  }, [allCatsData]);

  return (
    <div
      style={
        {
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'space-evenly'
        }
      }
      className="catWindow"
    >
      <CatComponent image={image} display={display} />
      <div style={{ justifyContent: 'space-between'}}>
        <ButtonComponent message="Yap" buttonType="success" size="lg" onClickEvent={recordYes}/>
        <ButtonComponent message="Nop" buttonType="danger" size="lg" onClickEvent={nextPhoto} />
      </div>
  
    </div>
  )
}

export { HomeComponent };
