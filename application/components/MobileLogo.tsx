import Image from "next/image";
import styled from "styled-components";
import logoImage from "../public/logo.png";

const MobileLogo = () => (
  <LogoWrapper>
    <Image alt="Portal Site" src={logoImage}></Image>
  </LogoWrapper>
);

const LogoWrapper = styled.div`
  padding-top: 20vh;
  width: 72vw;
  height: auto;
  margin-bottom: 5.2em;
`;

export default MobileLogo;
