import axios from 'axios';

const baseUrl = 'https://mysterious-basin-96824.herokuapp.com'

export const getTweets = async ()=> {
  try {
    const res = await axios.get(`${baseUrl}/api/tweets`);
    return res.data
  } catch (error) {
    console.error('[Get Tweet failed]：', error);
  }
}

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