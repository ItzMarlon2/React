import React from 'react';
import {Botones} from '../../UI/Botones/Botones';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return(
    <div className="header">
        <NavLink to='/'><Botones nombre="Home"/></NavLink>
        <NavLink to='/AboutUs'><Botones nombre="About Us"/></NavLink>
        <NavLink to='/Contact'><Botones nombre="Contact" /></NavLink>
        <NavLink to='/Contador'><Botones nombre="Contador" /></NavLink>
    </div>                                                             
  );
};


