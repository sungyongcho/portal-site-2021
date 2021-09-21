import TextContent from './TextContent'
import IFrame from 'react-iframe'
import styled from 'styled-components'
import { media } from "../styles/theme";

type Props = {
  artistName: string,
  video: string,
  text: string,
}

const InterviewBody = ({ artistName, video }: Props) => {
  return (
    <>
      <VideoArea>
        <VideoFrame src={video} frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
      </VideoArea>
      <InterviewName> {artistName} 인터뷰 </InterviewName>
    </>
  )
}

const VideoArea = styled.div`
  position: relative;
	width : 100%;
	height : 0;
  padding-bottom: 56.25%;
  margin-bottom: 3%;
`;

const VideoFrame = styled.iframe`
  position: absolute;
  top : 0;
	left : 0;
  width: 100%; /* 부모에 맞게 꽉 채운다. */
  height: 100%;
`

const InterviewName = styled.p`
  font-size: 1.5em;
`;

export default InterviewBody
