import React, {useState} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

export const Formulario = () => {

  const [state, setState] = useState({
    form:{
      "username":"",
      "password":"",
    },
    error:false,
    errorMsg:""
  })

  //Evento para que no se recargue la página
  const manejadorSubmit=(e)=>{
    e.preventDefault()
  }

  //El async significa que no va a esperar a que el dom se recargue para aejecutar su función
  const manejadorChange = async (e)=>{
    await setState({
      form:{
        ...state.form,
        [e.target.name]: e.target.value
      }
    })
    
  }
  

  const manejadorBoton=()=>{
    let url="https://backend-edw.herokuapp.com/login"
    axios.post(url, state.form)
    .then(response => {
      console.log(response);
        if(response.data.status === "ok"){

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
          <input type="text" id="email" name="username" required onChange={manejadorChange}/>
          <label className='labelForm'for="email">Nombre de usuario</label>
          <span></span>
        </div>
        <div className='txt_field'>
          <input type="password" id="password" autoComplete='off' name="password" required onChange={manejadorChange}/>
          <label className='labelForm' for="password">Contraseña</label>
          <span></span>
        </div>
        <div className='divbtn'>
          <input type="submit" value="Iniciar sesión" onClick={manejadorBoton}/>
          {/* <button className='btnSubmit'>Iniciar sesión</button> */}
          <NavLink to="/Registro"><button className='btnSubmit'>Registrarse</button></NavLink>
        </div>
        {state.error === true &&
          <div className="alerta">
            <p>{state.errorMsg}</p>
          </div>
        }
    </form>
  )
}
