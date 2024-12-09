import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import MonsterProvider from "../context/MonsterContext/MonsterProvider"

const Layout = () => {
  return (
    <div>
      <MonsterProvider>
          <Header/>
          <main>
            <Outlet/>
          </main>
          <footer>footer</footer>
      </MonsterProvider>
    </div>
  )
}

export default Layout