import React from 'react'
import { MainRegistro } from '../../layouts/MainRegistro/MainRegistro'
import { Footer } from '../../layouts/Footer/Footer';
import { Header } from '../../layouts/Header/Header';

export const Registro = () => {
  return (
    <div className='body'>
        <Header/>
        <MainRegistro/>
        <Footer/>
    </div>
  )
}
