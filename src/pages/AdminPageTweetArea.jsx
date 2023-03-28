import StyledAdminTweet from "components/StyledAdminTweet";
import styled from "styled-components";
import { useState,useEffect } from "react";
// api
import { getAdminTweets } from "api/api";

const AdminPageTweetsArea = ({ className }) => {

  const [adminTweets,setAdminTweets] = useState([])

    useEffect(() => {
    const getAdminTweetsAsync = async () => {
      try {
        const adminTweets = await getAdminTweets();
        setAdminTweets(adminTweets.map((adminTweet) => ({ ...adminTweet})));
      } catch (error) {
        console.error(error);
      }
    };
    getAdminTweetsAsync();
  }, []);

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
                    userAccount={adminTweet.User.account} 
                    tweetTime={`${Math.floor(Number(new Date() - new Date(adminTweet.createdAt)) / (1000 * 60 * 60))}小時`} 
                    tweetContent={adminTweet.description}/>
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