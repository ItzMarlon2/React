import React from 'react'

export const Span = ({contSpan, className, id}) => {
  return (
    <div>
        <span className={className} id={id}>{contSpan}</span>
    </div>
  )
}
