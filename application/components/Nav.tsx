import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

const Nav = () => {
  const router = useRouter()


  return (
    <nav>
      <ul>
        <li>
          <button type="button" onClick={() => router.push('/')}>
            홈으로
          </button>
        </li>
        <li>
          <button type="button" onClick={() => {
            let temp = router.asPath;
            router.push((temp.slice(0, temp.lastIndexOf('/')) === '') ? '/' : temp.slice(0, temp.lastIndexOf('/')))
          }}>
            상위메뉴
          </button>
        </li>
        <li>
          <button type="button" onClick={() => router.back()}>
            뒤로가기
          </button>
        </li>
      </ul>
    </nav>
  )
}


export default Nav
