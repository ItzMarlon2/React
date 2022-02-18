import React, {useState, useEffect} from 'react'
import { Botones } from '../../UI/Botones/Botones'
import { Imagen } from '../../UI/Imagen/Imagen'
import { Span } from '../../UI/Span/Span'
import ImagenB from '../../../assets/Images/nieve.jpeg'

export const MainContador = () => {

    const [counter, setCounter] = useState(0)

    const sumar = () => {

        setCounter(counter + 1)
    
    }

    const restar = () => {

        setCounter(counter-1)
    
    }

    const resetear = () => {
        setCounter(0)
    
    }

useEffect(()=>{
    
    const img =document.getElementById('imagen')
    const hr = document.getElementById('hrContador')
    const span = document.getElementById('contador')

    if(counter>=10){
       img.classList.remove('img_normal')
       img.classList.add('img_color')
       hr.classList.add('hr_color')
       hr.classList.remove('hr_normal')
       span.classList.add('contador_color')
       span.classList.remove('contador')
    }else{
        img.classList.remove('img_color')
        img.classList.add('img_normal')
        hr.classList.add('hr_normal')
        hr.classList.remove('hr_color')
        span.classList.add('contador')
        span.classList.remove('contador_color')
    }
},[counter])


    return (
        <div className='mainContador'>

            <Span id="contador" className="contador" contSpan={counter}/>
            <Imagen id="imagen" clase="img_normal" url={ImagenB}/>
            <br/>
            <hr id="hrContador" className='hr_normal'/>
            <div className='contenedor-botones'>
                <Botones event={restar} id="reducir" nombre="-"/>
                <Botones event={resetear} id="reset" nombre="Reset"/>
                <Botones event={sumar} id="aumentar" nombre="+"/>
            </div>
            
        </div>
    )
}
