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
      <Wrap>
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
      </Wrap>
      <TextContent content={content} textSize={'1em'} />
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
`
const Wrap = styled.div`
  position: relative;
  justify-content: center;
  margin-bottom: 3%;
  ${media.tablet}{
    width: 150%;
    height:100%;
  }
`;

const ProfilePhotoFrame = styled(Image)`
  align-self: center;
`;
export default MemberProfile
