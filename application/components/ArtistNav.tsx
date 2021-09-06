import Link from 'next/link'

const ArtistNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="artists/moonsohyun"><a>문소현</a></Link>
        </li>
        <li>
          <Link href="artists/aaa"><a>박동준</a></Link>
        </li>
        <li>
          <Link href="artists/bbb"><a>서태리</a></Link>
        </li>
        <li>
          <Link href="artists/ccc"><a>진나래</a></Link>
        </li>
        <li>
          <Link href="artists/ddd"><a>이다영</a></Link>
        </li>
        <li>
          <Link href="artists/eee"><a>윤하나</a></Link>
        </li>
        <li>
          <Link href="artists/fff"><a>미정</a></Link>
        </li>
        <li>
          <Link href="artists/ggg"><a>서지은</a></Link>
        </li>
        <li>
          <Link href="artists/hhh"><a>김진</a></Link>
        </li>
        <li>
          <Link href="artists/iii"><a>조성용</a></Link>
        </li>
        <li>
          <Link href="artists/jjj"><a>파이카</a></Link>
        </li>
      </ul>
    </nav>
  )
}


export default ArtistNav
