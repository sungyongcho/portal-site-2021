import Image from 'next/image'
import TextContent from './TextContent'
import styled from 'styled-components'
import { media } from "../styles/theme";
import { useWindowSize } from '../hooks/useWindowSize'
type Props = {
  name: string
  picture: string
  content: string
}


const MemberProfile = ({ name, picture, content }: Props) => {
  const { height, width } = useWindowSize();
  return (
    <ProfileLayout>
      <PhotoWrapper>
        {width > 376 ? <ProfilePhotoFrame
          src={picture}
          width='200px'
          height='200px'
          objectFit={'contain'}
          alt={name} /> :
          <ProfilePhotoFrame
            src={picture}
            width='100px'
            height='100px'
            objectFit={'contain'}
            alt={name} />}
      </PhotoWrapper>
      <IntroWrapper>
        <TextContent content={content} textSize={'1em'} />
      </IntroWrapper>
    </ProfileLayout>
  )
}

const ProfileLayout = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  ${media.tablet} {
    font-size: 0.8em;
    flex-direction: row;
    line-height: 1.3em;
  }
  ${media.desktop} {
    font-size: 0.98em;
    flex-direction: row;
    line-height: 2em;
  }
`
const PhotoWrapper = styled.div`
  position: relative;
  justify-content: center;
  margin-bottom: 3%;
  ${media.tablet}{
    width: 100%;
    margin-bottom:0;
  }
  ${media.desktop}{
    width: 120%;
    margin-bottom:0;
  }
`;

const IntroWrapper = styled.div`
  position: relative;
  margin-bottom: 3%;
  margin-left: 5%;
  ${media.tablet}{
    margin-bottom:0;
  }
  ${media.desktop}{
    margin-bottom:0;
  }
`;

const ProfilePhotoFrame = styled(Image)`
  align-self: center;
`;
export default MemberProfile
