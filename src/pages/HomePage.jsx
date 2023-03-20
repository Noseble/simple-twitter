import { Outlet } from "react-router-dom"

const HomePage = () => {
  return(
    <>
      <h1>This is HomePage.</h1>
      <Outlet/>
    </>

  )
}

export default HomePage