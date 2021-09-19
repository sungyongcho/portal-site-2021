import { GetStaticProps } from 'next';

import Link from 'next/link'
import { IExhibition } from '../../types/IExhibition';
import styled from 'styled-components'
import { getAllExhibitions } from '../../utils/mdxUtils';
import { motion } from 'framer-motion';

type ExhibitionProps = {
  exhibitions: IExhibition[];
}

const ExhibitionNav = ({ exhibitions }: ExhibitionProps) => {
  return (
    <ExhibitionList>
      {exhibitions.map((exhibitions) => (
        <ExhibitionItem key={exhibitions.slug}>
          <Link href={`exhibition/${exhibitions.slug}`}><a>{exhibitions.artistName}</a></Link>
        </ExhibitionItem>
      ))}
    </ExhibitionList>
  )
}

const ExhibitionList = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-around;
`

const ExhibitionItem = styled(motion.div)`
  font-size: 1.8em;
  padding: 0 0.5em;
`

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
