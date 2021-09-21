import Menu from './DesktopMenu'
import { useRouter } from "next/router";
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion';
import DesktopMenu from './DesktopMenu';
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
      {(showMenu && router.pathname !== '/networking') && <DesktopMenu />}
      <DesktopBody>
        {children}
      </DesktopBody>
    </>
  )
}

const DesktopBody = styled.div`
`;

export default DesktopLayout;
