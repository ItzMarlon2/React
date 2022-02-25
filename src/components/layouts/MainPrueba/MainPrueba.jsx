import React, {useState, useEffect} from 'react'
import { Imagen } from '../../UI/Imagen/Imagen'
import { Botones } from '../../UI/Botones/Botones'
import ImagenA from '../../../assets/Images/fuego.jfif'
import ImagenB from '../../../assets/Images/girasol.jfif'


export const MainPrueba = () => {

    const [cambio, setCambio] = useState(false)

    const cambiarColores = () =>{ 
        setCambio(!cambio)
    }


    useEffect(()=>{
        
        const img1 = document.getElementById('imagen1')
        const img2 = document.getElementById('imagen2')
        const boton = document.getElementById('boton')

        if(cambio===true){
            img1.classList.remove('img1_normal')
            img1.classList.add('img1_color')
            img2.classList.remove('img1_normal')
            img2.classList.add('img1_color')
            boton.classList.remove('boton_normal')
            boton.classList.add('boton_color')
            boton.textContent="Activado"
        }else{
            
            img1.classList.add('img1_normal')
            img1.classList.remove('img1_color')
            img2.classList.add('img1_normal')
            img2.classList.remove('img1_color')
            boton.classList.add('boton_normal')
            boton.classList.remove('boton_color')
            boton.textContent="Desactivado"
        }
    },[cambio])

  return (
    <div className='mainPrueba'>
        <Imagen id="imagen1" clase="img1_normal" url={ImagenA}/>
        <Imagen id="imagen2" clase="img1_normal" url={ImagenB}/>
        <br/>
        <Botones id="boton" clase="boton_normal" event={cambiarColores} nombre="cambiar"/>
    </div>
  )
}
