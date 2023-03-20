import { useParams } from "react-router-dom"

const HomePageTweetArea = () => {
  const { tweetId } = useParams()

  return(
    <h1>This is HomePageTweetArea for tweetID:{tweetId}.</h1>
  )
}

export default HomePageTweetArea