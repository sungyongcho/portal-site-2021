import TextContent from './TextContent'
import IFrame from 'react-iframe'

type Props = {
  video: string,
  text: string,
}

const InterviewBody = ({ video, text }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <IFrame url={video}></IFrame>
      <TextContent content={text}></TextContent>
    </div >
  )
}

export default InterviewBody
