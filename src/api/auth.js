import axios from 'axios';

const authURL = 'https://mysterious-basin-96824.herokuapp.com';

export const login = async ({ account, password, role }) => {
  try {
    const { data } = await axios.post(`${authURL}/api/login`, {
      account,
      password,
      role
    });

    const { token } = data.data;
    if (token) {
      return { success: true, ...data.data };
    }
    return data;
    
  } catch (error) {
    console.error('[Login Failed]:', error);
    return error.response.data;
  }
};


 
export const register = async ({ account, email, name, password, passwordCheck }) => {

  try {
    const { data } = await axios.post(`${authURL}/api/users`, {
      account,
      name,
      email,
      password,
      passwordCheck,
    });

    const { success } = data;

    if (success) {
      return { success: true, ...data};
    }
    return data;
  } catch (error) {
    console.error('[Register Failed]:',error );
    return error.response.data;
  }
} 
