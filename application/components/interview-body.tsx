import TextContent from './TextContent'
import IFrame from 'react-iframe'
import styled from 'styled-components'
import { media } from "../styles/theme";

type Props = {
  artistName: string,
  interviewTitle: string,
  video: string,
  text: string,
}

const InterviewBody = ({ artistName, interviewTitle, video, text }: Props) => {
  return (
    <>
      <InterviewLayout>
        <InterviewHeaderWrapper>
          <InterviewTitle> {interviewTitle}</InterviewTitle>
        </InterviewHeaderWrapper>
        <InterviewWrapper>
          <VideoArea>
            <VideoFrame src={video} frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen />
          </VideoArea>
          <InterviewContent>
            <InterviewName> {artistName} 인터뷰 </InterviewName>
            <TextContent content={text} textSize={'1.3em'} />
          </InterviewContent>
        </InterviewWrapper>
      </InterviewLayout>
    </>
  )
}

const InterviewHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding-left: 3%;
  padding-bottom: 3%;
  ${media.tablet} {
    padding-bottom: 1.5%;
    padding-left: 3%;
  }
`;

const InterviewTitle = styled.p`
  font-size: 2rem;
  ${media.tablet} {
    font-size: 2.5rem;
  }
`;

const InterviewLayout = styled.div`
  padding-top: 7%;
  padding-left: 6%;
  padding-right: 6%;
  overflow: scroll;
  box-sizing: "border-box";
`;

const InterviewWrapper = styled.div`
  border: 0.15em solid black;
  border-radius: 20px;
  padding: 5%;
  overflow: scroll;
  box-sizing: "border-box";
  ${media.tablet} {
    padding: 4%;
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
const InterviewName = styled.p`
  font-size: 1.8em;
  padding-bottom: 3%;
`;
const InterviewContent = styled.div`
  padding-top: 5%;
  text-align: left;
  line-height: 1.6em;
`

export default InterviewBody
