import React from 'react'

export const Botones = ({nombre, id, event}) => {
  return(
    <button onClick={event} id={id}>{nombre}</button>
  );
};
