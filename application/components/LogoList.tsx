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
  position: relative;
  display: flex;
  flex-direction: row;
`
const ImageContainer = styled.div`
  width: 10em;
  height: 7em;
  padding : 0;
`


export default LogoList
