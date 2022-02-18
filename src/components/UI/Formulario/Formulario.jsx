import React from 'react'

export const Formulario = () => {
  return (
    <form className='formContact'>
        <div className='txt_field'>
          <input type="text" id="nombre" autoComplete='off'/>
          <label className='labelForm' for="nombre">Nombre</label>
          <span></span>
        </div>
        <div className='txt_field'>
          <input type="email" id="email"/>
          <label className='labelForm'for="email">Email</label>
          <span></span>
        </div>
        <label className='labelForm'>Mensaje</label>
        <textarea cols="30" rows="10"></textarea>
        <div className='divbtn'>
          <button className='btnSubmit'>Enviar</button>
        </div>
    </form>
  )
}
