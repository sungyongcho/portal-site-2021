import Menu from './Menu'
import Nav from './Nav'
import { useRouter } from "next/router";


const Layout = ({ children }) => {

  const router = useRouter();

  const showMenu = ((router.pathname.match(/\//g) || []).length === 2) ? false : true;

  return (
    <>

      {showMenu && <Menu />}
      <Nav />
      <div>
        {showMenu && <h1>포털 사이트 2021</h1>}
        <div>
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout;
