import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Body } from './components/pages/Body/Body';
import { AboutUs } from './components/pages/AboutUs/AboutUs'
import { Contact } from './components/pages/Contact/Contact'
import { PageNot } from './components/pages/PageNot/PageNot';
import { Contador } from './components/pages/Contador/Contador';
import { Prueba } from './components/pages/Prueba/Prueba';
import { Registro } from './components/pages/Registro/Registro';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Contador' element={<Contador/>}/>
        <Route path='/Prueba' element={<Prueba/>}/>
        <Route path="/Registro" element={<Registro/>}/>
        <Route path="*" element={<PageNot/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
