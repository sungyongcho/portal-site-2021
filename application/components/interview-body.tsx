import TextContent from './TextContent'
import IFrame from 'react-iframe'
import styled from 'styled-components'
import { media } from "../styles/theme";

type Props = {
  video: string,
  text: string,
}

const InterviewBody = ({ video, text }: Props) => {
  return (
    <>
      <InterviewLayout>
        <VideoArea>
          <VideoFrame src={video} frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
        </VideoArea>
        <InterviewContent>
          <TextContent content={text} textSize={'1em'} />
        </InterviewContent>
      </InterviewLayout>
    </>
  )
}
const InterviewLayout = styled.div`
  overflow: scroll;
  box-sizing: "border-box";
  padding-left: 20%;
  padding-right: 20%;
  ${media.mobile}{
    padding-left: 12%;
    padding-right: 12%;
  }
`;

const VideoArea = styled.div`
  position: relative;
	width : 100%;
	height : 0;
  padding-bottom: 56.25%;
`;

const VideoFrame = styled.iframe`
  position: absolute;
  top : 0;
	left : 0;
  width: 100%; /* 부모에 맞게 꽉 채운다. */
  height: 100%;
`

const InterviewContent = styled.div`
  font-size: 1.8em;
  text-align: left;
  ${media.mobile}{
    font-size: 1.5em;
  }
`

export default InterviewBody
