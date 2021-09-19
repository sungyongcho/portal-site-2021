import Image from 'next/image'
import TextContent from './TextContent'
type Props = {
  name: string
  picture: string
  content: string
}

const MemberProfile = ({ name, picture, content }: Props) => {
  return (
    <div className="flex items-center">
      <Image src={picture} width="100" height="100" className="w-12 h-12 rounded-full mr-4" alt={name} />
      <TextContent content={content} />
    </div>
  )
}

export default MemberProfile
