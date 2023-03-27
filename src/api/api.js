import axios from 'axios';

const baseUrl = 'https://mysterious-basin-96824.herokuapp.com'
const token = localStorage.getItem('token')

export const getUser = async( userId ) => {
  try{
    const res = await axios.get(`${baseUrl}/api/users/${userId}`, {
      headers:{
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }catch(error){
    console.error('[Get User failed]:', error)
  }
}

export const getTopTen = async () => {
  try{
    const res = await axios.get(`${baseUrl}/api/followships10`, {
      headers:{
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }catch(error){
    console.error('[Get Top Ten failed]:', error)
  }
};

export const getTweets = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/tweets`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error('[Get Tweet failed]：', error);
  }
};

export const getAdminTweets = async ()=> {
  try {
    const res = await axios.get(`${baseUrl}/api/admin/tweets`);
    return res.data
  } catch (error) {
    console.error('[Get Admin Tweet failed]：', error);
  }
}

export const getAdminUsers = async ()=> {
  try {
    const res = await axios.get(`${baseUrl}/api/admin/users`);
    return res.data
  } catch (error) {
    console.error('[Get Admin Users failed]：', error);
  }
}