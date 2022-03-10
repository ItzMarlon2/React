import React, {useState} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

export const FormRegistro = () => {

  const [state, setState] = useState({
    form:{
      "username":"",
      "password":"",
      "name":"",
    },
    error:false,
    errorMsg:""
  })

  const manejadorSubmit=(e)=>{
    e.preventDefault()
  }

  const manejadorChange = async (e)=>{
    await setState({
      form:{
        ...state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  const manejadorBoton=()=>{
    let url="https://backend-edw.herokuapp.com/usuario"
    axios.post(url, state.form)
    .then(response => {
      console.log(response);
        if(response.data.status === "ok"){
          setState({
            error:false,
            errorMsg:"Usuario registrado con éxito"
          })
        }else{
          setState({
            error:true,
            errorMsg:response.data.Message
          })
        }
    }).catch(error =>{
      console.log(error);
      setState({
        error:true,
        errorMsg:"Error al conectar con el API"
      })
    })
  }

  return (
    <form className='formContact' onSubmit={manejadorSubmit}>
        <div className='txt_field'>
          <input type="text" id="text" name="name" required onChange={manejadorChange}/>
          <label className='labelForm'for="text">Nombre</label>
          <span></span>
        </div>
        <div className='txt_field'>
          <input type="password" id="password" name="password" autoComplete='off' required onChange={manejadorChange}/>
          <label className='labelForm' for="password">contraseña</label>
          <span></span>
        </div>
        <div className='txt_field' >
          <input type="text" id="email" name="username" required onChange={manejadorChange}/>
          <label className='labelForm'for="email">Nombre de usuario</label>
          <span></span>
        </div>
        
        
        <div className='divbtn'>
          <input type="submit" value="Registrarse" className='btnSubmit' onClick={manejadorBoton}/>
          <NavLink to="/Contact"><button className='btnSubmit'>Iniciar sesión</button></NavLink>
        </div>
        {state.error === true &&
          <div className="alerta">
            <p>{state.errorMsg}</p>
          </div>
        }
    </form>
  )
}
