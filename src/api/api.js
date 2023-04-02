import axios from 'axios';

const baseUrl = 'https://mysterious-basin-96824.herokuapp.com'


const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
  (config)=>{
    const token = sessionStorage.getItem('token');
    if(token){
      config.headers['Authorization'] = `Bearer ${token}`;
    };
    return config;
  },
  (error)=>{
    console.error(error)
  }
)

export const getUser = async( id ) => {
  try{
    const res = await axiosInstance.get(`${baseUrl}/api/users/${id}`);
    return res.data;
  }catch(error){
    console.error('[Get User failed]:', error)
  }
}

export const getUserTweets = async( id ) => {
  try{
    const res = await axiosInstance.get(`${baseUrl}/api/users/${id}/tweets`);
    return res.data;
  }catch(error){
    console.error('[Get User Tweets failed]:', error)
  }
}

export const getUserReplies = async( id ) => {
  try{
    const res = await axiosInstance.get(`${baseUrl}/api/users/${id}/replied_tweets`);
    return res.data;
  }catch(error){
    console.error('[Get User Replies failed]:', error)
  }
}

export const addReplies = async ( id, tweetId, comment ) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/api/tweets/${id === undefined ? tweetId : id}/replies`, 
    {comment})
    return res.data.success
  } catch(error) {
    console.error('[Add Replies failed]:', error)
  }
}

export const getUserLikes = async( id ) =>{
  try{
    const res = await axiosInstance.get(`${baseUrl}/api/users/${id}/likes`);
    return res.data;
  }catch(error){
    console.error('[Get User Liked Tweets failed]:', error)
  }
}

export const getUserFollowers = async ( id ) => {
  try{
    const res = await axiosInstance.get(`${baseUrl}/api/users/${id}/followers`);
    return res.data;
  }catch(error){
    console.error('[Get User Followers failed]:', error)
  }
}

export const getUserFollowings = async ( id ) => {
  try{
    const res = await axiosInstance.get(`${baseUrl}/api/users/${id}/followings`);
    return res.data;
  }catch(error){
    console.error('[Get User Followings failed]:', error)
  }
}

export const getTopTen = async () => {
  try{
    const res = await axiosInstance.get(`${baseUrl}/api/followships10`);
    return res.data;
  }catch(error){
    console.error('[Get Top Ten failed]:', error)
  }
};

export const getTweet = async ( tweetId ) => {
    try {
    const res = await axiosInstance.get(`${baseUrl}/api/tweets/${tweetId}`);
    return res.data;
  } catch (error) {
    console.error('[Get Tweet failed]:', error);
  }
}

export const getTweets = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/api/tweets`);
    return res.data;
  } catch (error) {
    console.error('[Get Tweets failed]:', error);
  }
};

export const getUserSetting = async (id) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/api/users/${id}`);
    return res.data;
  } catch (error) {
    console.error('[Get User Setting failed]:', error);
  }
}

export const putUserSetting = async (id,account, name,  email , password, introduction, image, avatar) => {
  try {
    if( password === ''){
    const  res   = await axiosInstance.put(`${baseUrl}/api/users/${id}`, {
      account, name,  email , introduction, image, avatar
    });
    return res 
    } else { 
      const  res   = await axiosInstance.put(`${baseUrl}/api/users/${id}`, {
      account, name,  email ,password, introduction, image, avatar
    });
    return res 
    }
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

    const  res   = await axiosInstance.put(`${baseUrl}/api/users/${id}`, formData, {
    headers: {'Content-Type': 'multipart/form-data'}
    });

    return res
  } catch (error) {
    console.error('[Set User Setting failed]:',error)
    return error.response.data;
  }
}

export const addTweet = async ({ description }) => {

  try {
    const { data } = await axiosInstance.post(`${baseUrl}/api/tweets`, {description});
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
    const res = await axiosInstance.get(`${baseUrl}/api/admin/tweets`);

    return res.data.result
  } catch (error) {
    console.error('[Get Admin Tweet failed]:', error);
  }
}

export const getAdminUsers = async ()=> {
  try {
    const res = await axiosInstance.get(`${baseUrl}/api/admin/users`);
    return res.data
  } catch (error) {
    console.error('[Get Admin Users failed]:', error);
  }
}

export const delUserTweet = async (id) => {
  try {
    const res = await axiosInstance.delete(`${baseUrl}/api/admin/tweets/${id}`)

    return res.data.success
  } catch (error) {
    console.error('[Del User Tweet failed]:', error)
  }
}

export const likeTweet = async (id) => {
  try{
    const res = await axiosInstance.post(`${baseUrl}/api/tweets/${id}/like`,{})
    return res.data.success
  }catch(error){
    console.error('[Like Tweet failed]:', error)
  }
}

export const dislikeTweet = async ( id ) => {
  try{
    const res = await axiosInstance.post(`${baseUrl}/api/tweets/${id}/unlike`,{})
    return res.data.success
  }catch(error){
    console.error('[DisLike Tweet failed]:', error)
  }
}

export const followUser = async ( id ) => {
  try{
    const res = await axiosInstance.post(`${baseUrl}/api/followships`,{ id })
    return res.data.success
  }catch(error){
    console.error('[Follow User failed]:', error)
  }
}

export const unfollowUser = async ( id ) => {
  try{
    const res = await axiosInstance.delete(`${baseUrl}/api/followships/${id}`)
    return res.data.success
  }catch(error){
    console.error('[UnFollow User failed]:', error)
  }
}