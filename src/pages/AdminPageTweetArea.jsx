import StyledAdminTweet from "components/StyledAdminTweet";

const AdminPageTweetsArea = () => {
  return(
      <div className="main-list-container">
        <div className="main-header">
          <h2>推文清單</h2>
        </div>
        <hr className="main-header-line"/>
        <StyledAdminTweet 
          userName={'Adam'}
          userAccount={'@adam666'} 
          tweetTime={'三小時'} 
          tweetContent={'ASasd45wa64sr89qw4d65a4sd654'}
        />      
      </div>
  )
}

export default AdminPageTweetsArea