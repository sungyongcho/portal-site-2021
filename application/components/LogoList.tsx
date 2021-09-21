import Image from 'next/image'
import styled from 'styled-components'

import arkoLogo from '../public/logos/arko_logo.png'
import archivingBabelLogo from '../public/logos/archiving_babel_logo.png'
import saegongganLogo from '../public/logos/saegonggan_logo.png'


const LogoList = () => {
  return (
    <>
      <Container>
        <ImageContainer>
          <Image src={arkoLogo} alt="" />
        </ImageContainer>
        <ImageContainer>
          <Image src={archivingBabelLogo} alt="" />
        </ImageContainer>
        <ImageContainer>
          <Image src={saegongganLogo} alt="" />
        </ImageContainer>
      </Container>
    </>
  )
}

const Container = styled.div`
 display: block;
  bottom:0;
  height: auto;
  position: relative;
  overflow: hidden;
  padding: 34.37% 0 0 0;
`
const ImageContainer = styled.div`
  display: block;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`


export default LogoList
