import axios from 'axios';

const baseUrl = 'https://mysterious-basin-96824.herokuapp.com'

const headers =  { Authorization: `Bearer ${localStorage.getItem('token')}`}

export const getUser = async( id ) => {
  try{
    const res = await axios.get(`${baseUrl}/api/users/${id}`, {
      headers,
    });
    return res.data;
  }catch(error){
    console.error('[Get User failed]:', error)
  }
}

export const getUserTweets = async( id ) => {
  try{
    const res = await axios.get(`${baseUrl}/api/users/${id}/tweets`, {
      headers,
    });
    return res.data;
  }catch(error){
    console.error('[Get User Tweets failed]:', error)
  }
}

export const getUserReplies = async( id ) => {
  try{
    const res = await axios.get(`${baseUrl}/api/users/${id}/replied_tweets`, {
      headers,
    });
    return res.data;
  }catch(error){
    console.error('[Get User Replies failed]:', error)
  }
}

export const addReplies = async ( id, tweetId, comment ) => {
  try {
    const res = await axios.post(`${baseUrl}/api/tweets/${id === undefined ? tweetId : id}/replies`, 
    {comment},{headers})
    return res
  } catch(error) {
    console.error('[Add Replies failed]:', error)
  }
}

export const getUserLikes = async( id ) =>{
  try{
    const res = await axios.get(`${baseUrl}/api/users/${id}/likes`, {
      headers,
    });
    return res.data;
  }catch(error){
    console.error('[Get User Liked Tweets failed]:', error)
  }
}

export const getUserFollowers = async ( id ) => {
  try{
    const res = await axios.get(`${baseUrl}/api/users/${id}/followers`, {
      headers,
    });
    return res.data;
  }catch(error){
    console.error('[Get User Followers failed]:', error)
  }
}

export const getUserFollowings = async ( id ) => {
  try{
    const res = await axios.get(`${baseUrl}/api/users/${id}/followings`, {
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
    const res = await axios.get(`${baseUrl}/api/tweets`, { headers });
    return res.data;
  } catch (error) {
    console.error('[Get Tweets failed]:', error);
  }
};

export const getUserSetting = async (id) => {
  try {
    const res = await axios.get(`${baseUrl}/api/users/${id}`,{ headers });
    return res.data;
  } catch (error) {
    console.error('[Get User Setting failed]:', error);
  }
}

export const putUserSetting = async (id,account, name,  email , password, introduction, image, avatar) => {
  try {
    const  res   = await axios.put(`${baseUrl}/api/users/${id}`, {
      account, name,  email , password, introduction, image, avatar
    },{headers});

    return res
  } catch (error) {
    console.error('[Put User Setting failed]:',error)
    return error.response.data;
  }
}

export const setUserSetting = async (id, name, introduction, image, avatar) => {
  try {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('avatar', avatar);
    formData.append('name', name);
    formData.append('introduction', introduction);

    const  res   = await axios.put(`${baseUrl}/api/users/${id}`, formData, {
    headers: {
    ...headers,
    'Content-Type': 'multipart/form-data',
    }
    });

    return res
  } catch (error) {
    console.error('[Set User Setting failed]:',error)
    return error.response.data;
  }
}

export const addTweet = async ({ description }) => {

  try {
    const { data } = await axios.post(`${baseUrl}/api/tweets`, {
      description
    },{headers});
    const { success } = data;

    if (success) {
      return { success: true, ...data};
    }
    return data;
  } catch (error) {
    console.error('[Add Tweet Failed]:',error );
    return error.response.data;
  }
} 


export const getAdminTweets = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/admin/tweets`,{ headers });

    return res.data.result
  } catch (error) {
    console.error('[Get Admin Tweet failed]:', error);
  }
}

export const getAdminUsers = async ()=> {
  try {
    const res = await axios.get(`${baseUrl}/api/admin/users`,{ headers });
    return res.data
  } catch (error) {
    console.error('[Get Admin Users failed]:', error);
  }
}

export const delUserTweet = async (id) => {
  try {
    const res = await axios.delete(`${baseUrl}/api/admin/tweets/${id}`
  ,{ headers })

    return res.data.removedTweet
  } catch (error) {
    console.error('[Del User Tweet failed]:', error)
  }
}