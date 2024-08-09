export const login = async (email, password) => {

    //aca falta el endpoint
    const response = await fetch(//'API_TBD',
     {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      throw new Error('Login fallido');
    }
  
    const data = await response.json();
    return data.token;
  };
  