import axios from 'axios';

const authURL = 'https://mysterious-basin-96824.herokuapp.com';

export const login = async ({ email, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/api/signin`, {
      email,
      password,
    });

    const { token, user } = data;
    if (token) {
      return { success: true, token, user };
    }
    return data;
  } catch (error) {
    console.error('[Login Failed]:', error);
  }
};
