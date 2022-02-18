import React from 'react'

export const Texto = ({contParrafo, className, id}) => {
  return (
    <div>
        <p className={className} id={id}>{contParrafo}</p>
    </div>
  )
}
