import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

/* 導入頁面 */
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import AdminLoginPage from 'pages/AdminLoginPage';
import AdminPage from 'pages/AdminPage';
import AdminPageTweetsArea from 'pages/AdminPageTweetArea';
import AdminPageUsersArea from 'pages/AdminPageUsersArea';
import HomePage from 'pages/HomePage';
import HomePageIndexArea from 'pages/HomePageIndexArea';
import HomePageTweetArea from 'pages/HomePageTweetArea';
import HomePageUserArea from 'pages/HomePageUserArea';
import HomePageUserTweetArea from 'pages/HomePageUserTweetArea';
import HomePageUserReplyArea from 'pages/HomePageUserReplyArea';
import HomePageUserLikeArea from 'pages/HomePageUserLikeArea';
import HomePageUserFollowerArea from 'pages/HomePageUserFollowerArea';
import HomePageUserFollowingArea from 'pages/HomePageUserFollowingArea';
import SettingPage from 'pages/SettingPage';
import NotFoundPage from 'pages/NotFoundPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*後台路由*/}
        <Route path="admin_login" element={<AdminLoginPage />}/>
        <Route path="admin" element={<AdminPage/>}>
          <Route index element={<AdminPageTweetsArea/>}/>
          <Route path="tweets" element={<AdminPageTweetsArea/>}/>
          <Route path="users" element={<AdminPageUsersArea />}/>
        </Route>
        {/*前台路由*/}
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path='/' element={<HomePage/>}>
          <Route index element={<HomePageIndexArea />} />
          <Route path="tweet/:tweetId" element={<HomePageTweetArea />} />
          <Route path="user/:userId" element={<HomePageUserArea />}>
            <Route index element={<HomePageUserTweetArea />} />
            <Route path="tweet" element={<HomePageUserTweetArea />}/> 
            <Route path="reply" element={<HomePageUserReplyArea />}/>
            <Route path="like" element={<HomePageUserLikeArea />}/>
            <Route path="follower" element={<HomePageUserFollowerArea/>}/>
            <Route path="following" element={<HomePageUserFollowingArea/>} />
          </Route>
          <Route path="setting" element={<SettingPage />} />
        </Route>
        {/*未找到路由*/}
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
