import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import MonsterProvider from "../context/MonsterContext/MonsterProvider"
import ReviewsProvider from "../context/ReviewsContext/ReviewProcide"

const Layout = () => {
  return (
    <div>
      <MonsterProvider>
        <ReviewsProvider>
          <Header/>
          <main>
            <Outlet/>
          </main>
          <footer>footer</footer>
        </ReviewsProvider>
      </MonsterProvider>
    </div>
  )
}

export default Layout