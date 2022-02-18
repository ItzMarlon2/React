import React from 'react'
import { Footer } from '../../layouts/Footer/Footer'
import { Header } from '../../layouts/Header/Header'
import { MainContador } from '../../layouts/MainContador/MainContador'

export const Contador = () => {
  return (
    <div className='body'>
        <Header/>
        <MainContador/>
        <Footer/>
    </div>
  )
}
