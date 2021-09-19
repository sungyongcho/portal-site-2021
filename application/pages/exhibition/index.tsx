import { GetStaticProps } from 'next';

import Link from 'next/link'
import { IExhibition } from '../../types/IExhibition';
import styled from 'styled-components'
import { getAllExhibitions } from '../../utils/mdxUtils';
import { AnimatePresence, motion } from 'framer-motion';

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
      <ExhibitionList>
        {exhibitions.map((exhibitions) => (
          <ExhibitionItem key={exhibitions.slug}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Link href={`exhibition/${exhibitions.slug}`}><a>{exhibitions.artistName}</a></Link>
          </ExhibitionItem>
        ))}
      </ExhibitionList>
    </motion.div>
  )
}

const ExhibitionList = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-around;
`

const ExhibitionItem = styled(motion.li)`
   list-style:none;
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
