import React from 'react';
import { Footer } from '../../layouts/Footer/Footer';
import { Header } from '../../layouts/Header/Header';
import { Main } from '../../layouts/Main/Main';

export const Body = () => {

  return(
    <div className='body'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
  
};
