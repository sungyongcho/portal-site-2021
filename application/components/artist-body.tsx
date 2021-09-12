import ArtistWorklist from './artist-worklist'
import TextContent from './TextContent'
import ArtistContact from './artist-contact'

type Props = {
  worklist: string[]
  cv: string,
  email: string,
  sns: string,
  website: string,
}

const ArtistBody = ({ worklist, cv, email, sns, website }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      {typeof worklist !== 'undefined' ? <ArtistWorklist workList={worklist} /> : ''}
      <TextContent content={cv}></TextContent>
      <ArtistContact email={email} sns={sns} website={website} />
    </div >
  )
}

export default ArtistBody
