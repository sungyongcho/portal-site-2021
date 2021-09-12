import TextContent from './TextContent'
import IFrame from 'react-iframe'

type Props = {
  video: string,
  text: string,
}

const InterviewBody = ({ video, text }: Props) => {
  return (
    <div style={{
      boxSizing: "border-box",
      paddingLeft: "5%",
      paddingRight: "5%"
    }}>
      <div style={{
        position: "relative",
        width: "100%",
        paddingBottom: "56.25%",
      }}>
        <iframe style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }} src={video} frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
      </div>
      <div>
        <TextContent content={text} />
      </div>
    </div>
  )
}

export default InterviewBody
