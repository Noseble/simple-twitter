import { useParams, Outlet } from "react-router-dom"

const HomePageUserArea = () => {
  const { userId } = useParams()

  return(
    <>
      <h1>This is HomePageUserArea for userID:{userId}.</h1>
      <Outlet />
    </>

  )
}

export default HomePageUserArea