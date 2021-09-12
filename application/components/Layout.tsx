import Menu from './Menu'
import Nav from './Nav'
import { useRouter } from "next/router";


const Layout = ({ children }) => {

  const router = useRouter();

  const showMenu = router.pathname === "/artists" ? false : true;

  console.log(router.pathname);
  return (
    <>

      {showMenu && <Menu />}
      <Nav />
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout;
