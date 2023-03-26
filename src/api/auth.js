import axios from 'axios';

const authURL = 'https://mysterious-basin-96824.herokuapp.com';

export const login = async ({ email, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/api/login`, {
      email,
      password,
    });
    console.log(data)
   const { authToken } = data;
    if (authToken) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.error('[Login Failed]:', error);
  }
};

 
export const register = async ({ account, email, name, password, passwordCheck }) => {

  try {
    const { data } = await axios.post(`${authURL}/api/users`, {
      account,
      name,
      email,
      password,
      passwordCheck
    });
    console.log(data)
    const { authToken } = data;

    if (authToken) {
      return { success: true, ...data};
    }
    return data;
  } catch (error) {
    console.error('[Register Failed]:',error )
  }

} 