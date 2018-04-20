import React from 'react'
import './ValSquare.css';

const ValSquare = ({value, ...props}) => (
  <div className="ValSquare Square" {...props}>
      {value}
  </div>
)

export default ValSquare;
