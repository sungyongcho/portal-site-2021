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
      <DesktopBody>
        {children}
      </DesktopBody>
    </>
  )
}

const DesktopBody = styled.div`
top:0;
left:0;
`;

export default DesktopLayout;
