import Image from 'next/image'
import TextContent from './TextContent'
import styled from 'styled-components'
import { media } from "../styles/theme";

type Props = {
  name: string
  picture: string
  content: string
}

const MemberProfile = ({ name, picture, content }: Props) => {
  return (
    <ProfileLayout>
      <Wrap>
        <ProfilePhotoFrame
          src={picture}
          width='100px'
          height='100px'
          objectFit={'contain'}
          alt={name} />
      </Wrap>
      <TextContent content={content} textSize={'1.2em'} />
    </ProfileLayout>
  )
}

const ProfileLayout = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  ${media.tablet} {
    flex-direction: row;
  }
`
const Wrap = styled.div`
  position: relative;
  margin-bottom: 3%;
`;

const ProfilePhotoFrame = styled(Image)`
  border-radius: 10px;
`;
export default MemberProfile
