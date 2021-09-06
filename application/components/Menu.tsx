import Link from 'next/link'

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/"><a>Home</a></Link>
        </li>
        <li>
          <Link href="/artists"><a>Artists</a></Link>
        </li>
        <li>
          <Link href="/interview"><a>Interview</a></Link>
        </li>
        <li>
          <Link href="/exhibition"><a>Exhibition</a></Link>
        </li>
        <li>
          <Link href="/texts"><a>Texts</a></Link>
        </li>
        <li>
          <Link href="/networking"><a>Networking</a></Link>
        </li>
      </ul>
    </nav>
  )
}


export default Menu
