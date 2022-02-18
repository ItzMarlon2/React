import React from 'react';
import { Imagen } from '../../UI/Imagen/Imagen';
import imagen2 from '../../../assets/Images/imagen2.jpeg'


export const Main = () => {
  return(
    <div className='main'>
        <Imagen url={imagen2}/>
    </div>
  );
};
