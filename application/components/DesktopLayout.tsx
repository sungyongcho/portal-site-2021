import Menu from './Menu'
import { useRouter } from "next/router";
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion';
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
      <motion.div key={router.route} initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}>
        <DesktopBody>
          {children}
        </DesktopBody>
      </motion.div>
    </>
  )
}

const DesktopBody = styled.div`
      flex-direction: row;
      justify-content: center;
      text-align: center;
      `

export default DesktopLayout;
