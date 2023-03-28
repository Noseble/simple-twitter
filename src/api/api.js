import axios from 'axios';

const baseUrl = 'https://mysterious-basin-96824.herokuapp.com'

const headers =  { Authorization: `Bearer ${localStorage.getItem('token')}`}

export const getTweets = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/tweets`, {
      headers
    });
    return res.data;
  } catch (error) {
    console.error('[Get Tweet failed]：', error);
  }
};

export const getUserSetting = async (id) => {
  try {
    const res = await axios.get(`${baseUrl}/api/users/${id}`,{
      headers
    });
    return res.data;
  } catch (error) {
    console.error('[Get User Setting failed]：', error);
  }
}

export const putUserSetting = async (payload) => {
  try {
    const {id,account, name,  email , password,passwordCheck} = payload
    const  res  = await axios.put(`${baseUrl}/api/users/${id}`, {
       headers,id,account, name,  email , password, passwordCheck
    });
    return res.data
  } catch (error) {
    console.error('[Put User Setting failed]:',error)
    console.log(error)
  }
}



export const getAdminTweets = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/admin/tweets`,{
      headers
    });
    return res.data.result
  } catch (error) {
    console.error('[Get Admin Tweet failed]：', error);
  }
}

export const getAdminUsers = async ()=> {
  try {
    const res = await axios.get(`${baseUrl}/api/admin/users`,{
      headers
    });
    return res.data
  } catch (error) {
    console.error('[Get Admin Users failed]：', error);
  }
}