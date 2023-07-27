

import React from 'react';
import  './PlansScreen.css'// Import the CSS file

const StripeButton = () => {
  const redirectToStripe = () => {
    window.location.href = 'https://buy.stripe.com/dR62bqeqEayz1nqdQR';
  };
  const redirectToStripe1 = () => {
    window.location.href = 'https://buy.stripe.com/28o8zO2HWayzfeg8wy';
  };
  const redirectToStripe2 = () => {
    window.location.href = 'https://buy.stripe.com/5kAbM01DSgWX2ru4gg';
  };

  return (
    <div className="container">
      <div className='box1'>
        <h3>Base plan</h3>
        <h5 className='s1'> 720p movies</h5>
        <button className='b1' onClick={redirectToStripe}>subscribe</button>
      </div>
  
      <div className='box1'>
        <h3>Standard plan</h3>
        <h5 className='s1'> movies HDR+ </h5>
        <button className='b1' onClick={redirectToStripe1}>subscribe</button>
      </div>

      <div className='box1'>
        <h3>premium</h3>
        <h5 className='s1'>HDR + 4k </h5>
        <button className='b1' onClick={redirectToStripe2}>subscribe</button>
      </div>
    </div>
  )
  
};

export default StripeButton;
