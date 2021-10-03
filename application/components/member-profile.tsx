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
        {width > 767 ? <ProfilePhotoFrame
          src={picture}
          width='200px'
          height='200px'
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

const PhotoWrapper = styled.div`
  flex: 1 0 100px;
  ${media.tablet}{
    flex: 1 0 120px;
  }
  ${media.desktop}{
    flex: 1 0 120px;
  }
`;

const IntroWrapper = styled.div`
  flex: 0 1 auto;
`;

const ProfileLayout = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  ${media.tablet} {
    font-size: 0.8em;
    flex-direction: row;
    line-height: 2.2em;
  }
  ${media.desktop} {
    font-size: 0.98em;
    flex-direction: row;
    line-height: 2em;
  }
  & ${PhotoWrapper} {
    /* background: #ff00ff; */
  }

  & ${IntroWrapper} {
    padding-left: 2vw;
    /* background: black; */
  }
`

const ProfilePhotoFrame = styled(Image)`
display : block;
margin : auto;
`;




export default MemberProfile
