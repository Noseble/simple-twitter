import axios from 'axios';

const baseUrl = 'https://mysterious-basin-96824.herokuapp.com'

const headers =  { Authorization: `Bearer ${localStorage.getItem('token')}`}

export const getUser = async( userId ) => {
  try{
    const res = await axios.get(`${baseUrl}/api/users/${userId}`, {
      headers,
    });
    return res.data;
  }catch(error){
    console.error('[Get User failed]:', error)
  }
}

export const getUserTweets = async( userId ) => {
  try{
    const res = await axios.get(`${baseUrl}/api/users/${userId}/tweets`, {
      headers,
    });
    return res.data;
  }catch(error){
    console.error('[Get User Tweets failed]:', error)
  }
}

export const getUserReplies = async( userId ) => {
  try{
    const res = await axios.get(`${baseUrl}/api/users/${userId}/replied_tweets`, {
      headers,
    });
    return res.data;
  }catch(error){
    console.error('[Get User Replies failed]:', error)
  }
}

export const getUserLikes = async() =>{
  try{
    const res = await axios.get(`${baseUrl}/api/users/${userId}/tweets`, {
      headers,
    });
    return res.data;
  }catch(error){
    console.error('[Get User Tweets failed]:', error)
  }
}

export const getUserFollowers = async ( userId ) => {
  try{
    const res = await axios.get(`${baseUrl}/api/users/${userId}/followers`, {
      headers,
    });
    return res.data;
  }catch(error){
    console.error('[Get User Followers failed]:', error)
  }
}

export const getUserFollowings = async ( userId ) => {
  try{
    const res = await axios.get(`${baseUrl}/api/users/${userId}/followings`, {
      headers,
    });
    return res.data;
  }catch(error){
    console.error('[Get User Followings failed]:', error)
  }
}

export const getTopTen = async () => {
  try{
    const res = await axios.get(`${baseUrl}/api/followships10`, {
      headers,
    });
    return res.data;
  }catch(error){
    console.error('[Get Top Ten failed]:', error)
  }
};

export const getTweet = async ( tweetId ) => {
    try {
    const res = await axios.get(`${baseUrl}/api/tweets/${tweetId}`, {
      headers
    });
    return res.data;
  } catch (error) {
    console.error('[Get Tweet failed]:', error);
  }
}

export const getTweets = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/tweets`, {
      headers
    });
    return res.data;
  } catch (error) {
    console.error('[Get Tweets failed]:', error);
  }
};

export const getUserSetting = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/users/${id}`,{
      headers
    });
    return res.data.result
  } catch (error) {
    console.error('[Get User Setting failed]:', error);
  }
}

export const putUserSetting = async (payload) => {
  const {id, email, name, account, password} = payload;
  try {
    const res = await axios.put(`${baseUrl}/api/users/${id}`, {
       headers,email, name, account, password
    });
    return res.data
  } catch (error) {
    console.error('[Put User Setting failed]:',error)
  }
}



export const getAdminTweets = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/admin/tweets`,{
      headers
    });
    return res.data.result
  } catch (error) {
    console.error('[Get Admin Tweet failed]:', error);
  }
}

export const getAdminUsers = async ()=> {
  try {
    const res = await axios.get(`${baseUrl}/api/admin/users`,{
      headers
    });
    return res.data
  } catch (error) {
    console.error('[Get Admin Users failed]:', error);
  }
}