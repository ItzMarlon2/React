import React from 'react'
import { NavLink } from 'react-router-dom';

export const FormRegistro = () => {
  return (
    <form className='formContact'>
        <div className='txt_field'>
          <input type="text" id="text"/>
          <label className='labelForm'for="text">Nombre</label>
          <span></span>
        </div>
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
          <button className='btnSubmit'>Registrarse</button>
          <NavLink to="/Contact"><button className='btnSubmit'>Iniciar sesión</button></NavLink>
        </div>
    </form>
  )
}
