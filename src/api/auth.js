import axios from 'axios';

const authURL = 'https://mysterious-basin-96824.herokuapp.com';

export const login = async ({ email, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/api/login`, {
      email,
      password,
    });
    const { token } = data.data;
    if (token) {
      return { success: true, ...data.data };
    }
    return data;
  } catch (error) {
    console.error('[Login Failed]:', error);
  }
};

export const AdminLogin = async ({ email, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/api/login`, {
      email,
      password,
    });
    const { token } = data.data;
    if (token) {
      return { role: admin, ...data.data };
    }
    return data;
  } catch (error) {
    console.error('[Admin Login Failed]:', error);
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
    const { token } = data;

    if (token) {
      return { success: true, ...data};
    }
    return data;
  } catch (error) {
    console.error('[Register Failed]:',error )
  }
} 

// export const checkPermission = async (authToken) => {
//   axios.get(`${authURL}/api/auth/test-token`)
// }