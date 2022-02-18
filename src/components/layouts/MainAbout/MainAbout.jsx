import React from 'react'
import { Imagen } from '../../UI/Imagen/Imagen'
import imagenA from '../../../assets/Images/imag.jpg'

export const MainAbout = () => {
  return (
    <div className='main'>
        <Imagen url={imagenA}/>
    </div>
  )
}
