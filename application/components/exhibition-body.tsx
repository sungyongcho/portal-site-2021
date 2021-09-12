import TextContent from './TextContent'
import IFrame from 'react-iframe'

type Props = {
  vr: string,
}

const ExhibitionBody = ({ vr }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <IFrame width='50%' height='1000px' url={vr} sandbox="allow-scripts" allow="fullscreen"></IFrame>
    </div >
  )
}

export default ExhibitionBody
