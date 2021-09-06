import type { NextPage } from 'next';
import ArtistNav from '../components/ArtistNav';
import HeadInfo from '../components/HeadInfo';

const artists: NextPage = () => {
  return (
    <div>
      <HeadInfo title="Artists"></HeadInfo>
      <h1>Artists</h1>
      <ArtistNav></ArtistNav>
    </div>
  )
}

export default artists
