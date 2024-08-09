import React from 'react';
import LoginForm from './components/loginForm';
import ProtectedComponent from './components/protectedComponent';
import useAuth from './hooks/useAuth';

const App = () => {
  const { token, handleLogin, handleLogout } = useAuth();

  return (
    <div>
      {token ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <ProtectedComponent />
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
