import TextContent from './TextContent'
import IFrame from 'react-iframe'
import { jsx, css } from '@emotion/react';

type Props = {
  vr: string,
}

const ExhibitionBody = ({ vr }: Props) => {
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
        }} src={vr} sandbox="allow-scripts" allow="fullscreen"></iframe>
      </div>
    </div>
  )
}

export default ExhibitionBody
