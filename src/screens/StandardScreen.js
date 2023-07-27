import React from 'react';
import  './PlansScreen.css'// Import the CSS file

const StripeButton = () => {
  const redirectToStripe = () => {
    window.location.href = 'https://buy.stripe.com/5kAbM01DSgWX2ru4gg';
  };

  return (
    <div className="container">
      <h5>Base plan</h5>
      <h6>expires in </h6>

      <button onClick={redirectToStripe}>subscribe</button>
    </div>
  );
};

export default StripeButton;