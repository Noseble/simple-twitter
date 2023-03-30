import styled from "styled-components"

import StyledReply from "components/StyledReply"
import StyledUserNavItem from "components/StyledUserNavItem"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { getUser, getUserReplies } from "api/api"

const HomePageUserReplyArea = ({ className }) => {
  const { userId } = useParams()
  const [ user, setUser] = useState({})
  const [ userReplies, setUserReplies ] = useState([])

  useEffect(()=>{

    const getCurrentUser = async(id) =>{
      try{
        const res = await getUser(id)
        setUser(res)
      }catch(error){
        console.error(error)
      }
    }

    const getCurrentUserReplies = async(id) => {
      try{
        const res = await getUserReplies(id)
        setUserReplies(res)
      }catch(error){
        console.error(error)
      }
    }

    getCurrentUser(userId)
    getCurrentUserReplies(userId)
  },[userId])
  
  return(  
    <div className={className}>
      <StyledUserNavItem/>
      <hr className="main-header-line"/>
      <ul className="tweet-list">
        {userReplies.map((userReply)=>{
          return(
            <li key={userReply.id}>
              <StyledReply userId={userReply.UserId} userName={user.name} userAccount={user.account} userAvatar={user.avatar} replyTime={userReply.createdAt} replyToId={userReply.Tweet.User.id} replyToAccount={userReply.Tweet.User.account} replyContent={userReply.comment}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const StyledHomePageUserReplyArea = styled(HomePageUserReplyArea)`

`

export default StyledHomePageUserReplyArea