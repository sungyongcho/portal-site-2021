import TextContent from './TextContent'
import styled from 'styled-components';
import IframeResizer from 'iframe-resizer-react'
import { media } from "../styles/theme";


type Props = {
  vr: string,
}

const ExhibitionBody = ({ vr }: Props) => {
  return (
    <>
      <ExhibitionArea>
        <ExhibitionFrame frameBorder="0" src={vr} sandbox="allow-scripts allow-same-origin allow-top-navigation allow-popups allow-forms" allow="fullscreen" allowFullScreen />
      </ExhibitionArea >
    </>
  )
}

const ExhibitionArea = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
	width : 100%;
  height: 100%;
`;


const ExhibitionFrame = styled.iframe`
  position: absolute;
  top : 0;
	left : 0;
  width: 100%; /* 부모에 맞게 꽉 채운다. */
  height: 100%;
`

export default ExhibitionBody

