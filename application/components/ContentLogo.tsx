import Image from "next/image";
import styled from "styled-components";
import logoImage from "../public/logo.png";
import { useRouter } from 'next/router'
import { media } from "../styles/theme";

const ContentLogo = () => {
  const router = useRouter()
  return (
    <LogoWrapper>
      <Image alt="Portal Site" src={logoImage} onClick={() => router.push('/')}></Image>
    </LogoWrapper >)
};

const LogoWrapper = styled.div`
  position:fixed;
  top:3%;
  left:30%;
  width: 40%;
  margin:0;
  padding:0;
  height: auto;
  ${media.desktop}{
    top:3%;
    left:42.5%;
    width:15%;
  }
`;

export default ContentLogo;
