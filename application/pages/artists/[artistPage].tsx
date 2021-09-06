import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const artistName: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      아티스트 테스팅중 {router.query.artistPage}
    </div>
  )
}

export default artistName
