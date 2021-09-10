import ArtistProfile from './artist-profile';
import TextContent from './TextContent';

type Props = {
  artistName: string
  profileImage: string
  introduction: string
}

const PostHeader = ({ artistName, profileImage, introduction }: Props) => {
  return (
    <>
      {/* <PostTitle>{title}</PostTitle> */}
      <div>
        {/* <div className="hidden md:block md:mb-12"> */}
        <ArtistProfile name={artistName} picture={profileImage} />
      </div>
      <div>
        {/* <div className="mb-8 md:mb-16 sm:mx-0"> */}
        <TextContent content={introduction} />
      </div>
    </>
  )
}

export default PostHeader
