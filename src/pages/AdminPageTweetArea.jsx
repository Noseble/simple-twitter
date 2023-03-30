import StyledAdminTweet from "components/StyledAdminTweet";
import styled from "styled-components";
import { useState,useEffect } from "react";
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
    setAdminTweets(adminTweets.map((adminTweet) => ({ ...adminTweet})));
  } catch (error) {
    console.error(error);
  }
};

  return(
      <div className={className}>
        <div className="main-header">
          <h2>推文清單</h2>
        </div>
        <hr className="main-header-line"/>
        <ul className="admin-tweet-list">
          {adminTweets.map(({...adminTweet}) => {
            return(
              <li key={adminTweet.id}>
                <StyledAdminTweet 
                    userName={adminTweet.User.name}
                    userImageSrc={adminTweet.User.avatar}
                    userAccount={adminTweet.User.account} 
                    tweetTime={`${Math.floor(Number(new Date() - new Date(adminTweet.createdAt)) / (1000 * 60 * 60))}小時`} 
                    tweetContent={adminTweet.description}
                    onClick={() => handleDelTweet(adminTweet.id)}
                    />
              </li>
            )
          })}
        
        </ul>
      </div>
  )
}

const StyledAdminPageTweetsArea = styled(AdminPageTweetsArea)`

`

export default StyledAdminPageTweetsArea