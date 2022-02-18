import React from 'react'
import { Footer } from '../../layouts/Footer/Footer';
import { Header } from '../../layouts/Header/Header';
import { MainAbout } from '../../layouts/MainAbout/MainAbout';

export const AboutUs = () => {
  return (
    <div className='body'>
        <Header/>
        <MainAbout/>
        <Footer/>
    </div>
  )
}
