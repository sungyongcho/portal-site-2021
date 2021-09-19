import Menu from './Menu'
import { useRouter } from "next/router";
import styled from 'styled-components'
import { motion } from 'framer-motion';
type Props = {
  children: any
}

const DesktopLayout = ({ children }: Props) => {

  const router = useRouter();

  const showMenu = ((router.pathname.match(/\//g) || []).length === 2) ? false : true;

  const config = {
    type: "spring",
    damping: 20,
    stiffness: 100
  };
  return (
    <>
      {(showMenu && router.pathname !== '/networking') && <Menu />}
      <DesktopBody initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}>
        {children}
      </DesktopBody>
    </>
  )
}

const DesktopBody = styled(motion.div)`
  flex-direction: row;
  justify-content: center;
  text-align: center;
`

export default DesktopLayout;
