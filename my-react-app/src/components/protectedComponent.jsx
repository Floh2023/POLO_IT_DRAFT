import React from 'react';

const ProtectedComponent = () => {
  return (
    <div>
      <h1>Protected Content</h1>
      <p>Solo es accesible luego de logearse.</p>
    </div>
  );
};

export default ProtectedComponent;
