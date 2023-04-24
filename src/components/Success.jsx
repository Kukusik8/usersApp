import React from 'react';

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Successfully!</h3>
      <p>The invitation was sent for {count} users.</p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">Back</button>
    </div>
  );
};
