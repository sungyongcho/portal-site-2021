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
      <DesktopBody>
        {(showMenu && router.pathname !== '/networking') && <DesktopMenu />}
        <DesktopSubmenu>
          {children}
        </DesktopSubmenu>
      </DesktopBody>
    </>
  )
}

const DesktopBody = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items:center;
`;

const DesktopSubmenu = styled.div`
  padding-top: 3%;
  display:flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
`;

export default DesktopLayout;
