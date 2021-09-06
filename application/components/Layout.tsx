import Menu from './Menu'
import Head from 'next/head'
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <>

      <Menu />
      <Nav />
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout;
