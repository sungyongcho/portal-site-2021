import Image from "next/image";
import styled from "styled-components";
import logoImage from "../public/logo.png";

const MobileLogo = () => (
  <ImageContainer>
    <Image alt="Portal Site" src={logoImage}></Image>
  </ImageContainer>
);

const ImageContainer = styled.div`
  width: 25em;
`;

export default MobileLogo;
