import Image from "next/image";
import styled from "styled-components";
import logoImage from "../public/logo.png";
import { useRouter } from 'next/router'

const MobileLogo = () => {
  const router = useRouter()
  return (
    <LogoWrapper>
      <Image alt="Portal Site" src={logoImage} onClick={() => router.push('/')}></Image>
    </LogoWrapper >)
};

const LogoWrapper = styled.div`
  padding-top: 18vh;
  width: 72vw;
  height: auto;
  margin-bottom: 5.2em;
`;

export default MobileLogo;
