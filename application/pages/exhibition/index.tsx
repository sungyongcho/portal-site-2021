import { GetStaticProps } from 'next';

import Link from 'next/link'
import { IExhibition } from '../../types/IExhibition';
import styled from 'styled-components'
import { getAllExhibitions } from '../../utils/mdxUtils';
import { AnimatePresence, motion } from 'framer-motion';
import Item from '../../styles/item'

type ExhibitionProps = {
  exhibitions: IExhibition[];
}

const ExhibitionNav = ({ exhibitions }: ExhibitionProps) => {
  return (
    <motion.div initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}>
      {exhibitions.map((exhibitions) => (
        <Item key={exhibitions.slug}>
          <Link href={`exhibition/${exhibitions.slug}`}><a>{exhibitions.artistName}</a></Link>
        </Item>
      ))}
    </motion.div>
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
