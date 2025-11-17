export const login = (credentials, navigate) => {
  return async (dispatch) => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo authentication - in real app, this would be an API call
      if (credentials.email === 'demo@shoppyglobe.com' && credentials.password === 'demo123') {
        const user = {
          id: 1,
          firstName: 'Demo',
          lastName: 'User',
          email: credentials.email
        };
        
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: user
        });
        
        navigate('/');
      } else {
        // For demo, accept any email/password
        const user = {
          id: Date.now(),
          firstName: credentials.email.split('@')[0],
          lastName: 'User',
          email: credentials.email
        };
        
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: user
        });
        
        navigate('/');
      }
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: 'Invalid email or password'
      });
    }
  };
};

export const signup = (userData, navigate) => {
  return async (dispatch) => {
    dispatch({ type: 'SIGNUP_START' });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const user = {
        id: Date.now(),
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email
      };
      
      dispatch({
        type: 'SIGNUP_SUCCESS',
        payload: user
      });
      
      navigate('/');
    } catch (error) {
      dispatch({
        type: 'SIGNUP_FAILURE',
        payload: 'Registration failed. Please try again.'
      });
    }
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const clearError = () => ({
  type: 'CLEAR_ERROR'
});