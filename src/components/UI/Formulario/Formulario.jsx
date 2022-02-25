import React from 'react'
import { NavLink } from 'react-router-dom';

export const Formulario = () => {
  return (
    <form className='formContact'>
        <div className='txt_field'>
          <input type="email" id="email"/>
          <label className='labelForm'for="email">Email</label>
          <span></span>
        </div>
        <div className='txt_field'>
          <input type="password" id="password" autoComplete='off'/>
          <label className='labelForm' for="password">contraseña</label>
          <span></span>
        </div>
        
        <div className='divbtn'>
          <button className='btnSubmit'>Iniciar sesión</button>
          <NavLink to="/Registro"><button className='btnSubmit'>Registrarse</button></NavLink>
        </div>
    </form>
  )
}
