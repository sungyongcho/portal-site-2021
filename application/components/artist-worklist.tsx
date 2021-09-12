import Image from 'next/image'

type Props = {
  workList: string[];
}

const ArtistWorklist = ({ workList }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <ul>
        <li>
          <Image src={`${workList[0]}`} width='200' height='300px' alt="" />
        </li>
        <li>
          <Image src={`${workList[1]}`} width='200' height='300px' alt="" />
        </li>
        <li>
          <Image src={`${workList[2]}`} width='200' height='300px' alt="" />
        </li>
      </ul>
    </div>
  )
}

export default ArtistWorklist
