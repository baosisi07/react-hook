import React, {useContext} from 'react';
import {ColorContext} from './color'
function Show() {
    const {color} = useContext(ColorContext)
  return (
    <div>
      <p style={{'color': color}}>{color}</p>
    </div>
  );
}

export default Show;