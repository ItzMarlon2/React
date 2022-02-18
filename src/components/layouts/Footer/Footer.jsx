import React from 'react';
import { Botones } from '../../UI/Botones/Botones';

export const Footer = () => {
  return(
    <div className='footer'>
      <a target="_blank" href="https://github.com">
        <Botones nombre="Github"/>
      </a>
      <a target="_blank" href="https://twitter.com/?lang=en">
        <Botones nombre="Twitter"/>
      </a>
      <a target="_blank" href="https://www.linkedin.com">
        <Botones nombre="Linkedin" />
      </a>
    </div>
  );
};
