import { GetStaticProps } from 'next';

import Link from 'next/link'
import router from 'next/router'
import { IExhibition } from '../../types/IExhibition';

import { getAllExhibitions } from '../../utils/mdxUtils';

type ExhibitionProps = {
  exhibitions: IExhibition[];
}

const ExhibitionNav = ({ exhibitions }: ExhibitionProps) => {
  return (
    <>
      <h2>Exhibitions</h2>
      <div>
        <nav>
          <ul>
            {exhibitions.map((exhibitions) => (
              <div key={exhibitions.slug}>
                <li>
                  <Link href={`exhibition/${exhibitions.slug}`}><a>{exhibitions.artistName}</a></Link>
                </li>
              </div>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default ExhibitionNav

export const getStaticProps: GetStaticProps = async () => {
  const exhibitions = getAllExhibitions([
    'slug',
    'order',
    'artistName',
    'exhibitionUrl',
    'content'
  ]);

  return { props: { exhibitions } };
};
