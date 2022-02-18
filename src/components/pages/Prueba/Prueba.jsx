import React from 'react'
import { Footer } from '../../layouts/Footer/Footer';
import { Header } from '../../layouts/Header/Header';
import { MainPrueba } from '../../layouts/MainPrueba/MainPrueba';

export const Prueba = () => {
  return (
    <div className='body'>
        <Header/>
        <MainPrueba/>
        <Footer/>
    </div>
  )
}
