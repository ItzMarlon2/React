import React from 'react'
import { Botones } from '../../UI/Botones/Botones'
import { ImagenPage } from '../../UI/ImagenPage/ImagenPage'
import { Texto } from '../../UI/Texto/Texto'


export const MainPage = () => {
  return (
    <div className="main-page">
      <div className="contenedor-texto">
        <Texto contParrafo={"This page does "}/>
        <div className="contenedor-texto2">
        <Texto className="texto2" contParrafo={"not exist "}/>
        </div>
        <Botones name="Volver"/>
      </div>
      
        <ImagenPage/>
    </div>
  )
}