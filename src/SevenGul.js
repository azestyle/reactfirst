import React from 'react';

function RoseCart({ image, name }) {
  return (
    <div className='rcart'>
      <img className='rimage' src={image}  />
      <p className='rtittle'>{name}</p>
      <button className='rbutton'>səbətə at</button>
    </div>
  );
}

export default RoseCart;