import { useState,useEffect } from "react";
import styled from "styled-components";
import { toast } from 'react-toastify';

//shared components
import StyledAdminTweet from "components/StyledAdminTweet";
import StyledToastContainer from "components/StyledToastContainer";

// 載入svg
import { ReactComponent as Success } from "assets/icon/success.svg"
import { ReactComponent as Failed } from "assets/icon/failed.svg"

// api
import { delUserTweet, getAdminTweets } from "api/api";

const AdminPageTweetsArea = ({ className }) => {

  const [adminTweets,setAdminTweets] = useState([])

    useEffect(() => {
    const getAdminTweetsAsync = async () => {
      try {
        const res = await getAdminTweets();
        setAdminTweets(res);
      } catch (error) {
        console.error(error);
      }
    };
    getAdminTweetsAsync();
  }, []);

  const handleDelTweet = async (tweetId) => {
  try {
    const res = await delUserTweet(tweetId);
    const adminTweets = await getAdminTweets();

    if (res) {
      setAdminTweets(adminTweets.map((adminTweet) => ({ ...adminTweet})));
      showToastMessage('刪除貼文成功','success')
    } 
  } catch (error) {
    console.error(error);
    showToastMessage('刪除貼文失敗','failed')
  }
  };

  const showToastMessage = (message, icon) => {
  if (icon === 'success') {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
      hideProgressBar: true,
      icon: <Success />,
    });
  } else {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
      hideProgressBar: true,
      icon: <Failed />,
    });
  }
};

  return(
      <div className={className}>
        <div className="main-header">
          <h2>推文清單</h2>
        </div>
        <hr className="main-header-line"/>
        <ul className="admin-tweet-list">
          {adminTweets?.map((adminTweet) => {
            return(
              <li key={adminTweet?.id}>
                <StyledAdminTweet 
                    userName={adminTweet?.User?.name}
                    userAvatar={adminTweet?.User?.avatar}
                    userAccount={adminTweet?.User?.account} 
                    tweetTime={`${Math.floor(Number(new Date() - new Date(adminTweet?.createdAt)) / (1000 * 60 * 60))}小時`} 
                    tweetContent={adminTweet?.description}
                    onClick={() => handleDelTweet(adminTweet?.id)}
                    />
              </li>
            )
          })}
         <StyledToastContainer />
        </ul>
      </div>
  )
}

const StyledAdminPageTweetsArea = styled(AdminPageTweetsArea)`

`

export default StyledAdminPageTweetsArea