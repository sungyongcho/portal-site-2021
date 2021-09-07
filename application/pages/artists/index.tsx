import { GetStaticProps } from 'next';

import Link from 'next/link'
import router from 'next/router'

import { IArtist } from '../../types/IArtist'
import { getAllArtistPosts } from '../../utils/mdxUtils';

type ArtistProps = {
  artists: IArtist[];
}

const ArtistNav = ({ artists }: ArtistProps) => {
  return (
    <>
      <div>
        <nav>
          <ul>
            {artists.map((artists) => (
              <div key={artists.slug}>
                <li>
                  <Link href={`artists/${artists.slug}`}><a>{artists.artist_name}</a></Link>
                </li>
              </div>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default ArtistNav

export const getStaticProps: GetStaticProps = async () => {
  const artists = getAllArtistPosts([
    'slug',
    'order',
    'artist_name',
    'introduction',
    'profile_photo',
    'work_image',
    'cv',
    'contatct',
    'content',
  ]);

  return { props: { artists } };
};
