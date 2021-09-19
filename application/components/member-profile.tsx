import Image from 'next/image'
import TextContent from './TextContent'
import styled from 'styled-components'
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
          layout={'fill'}
          objectFit={'contain'}
          alt={name} />
      </Wrap>
      <TextContent content={content} textSize={'1.8em'} />
    </ProfileLayout>
  )
}

const ProfileLayout = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: space-around;
`
const Wrap = styled.div`
  position: relative;
  width: 30em;
`;

const ProfilePhotoFrame = styled(Image)`
  border-radius: 10px;
`
export default MemberProfile
