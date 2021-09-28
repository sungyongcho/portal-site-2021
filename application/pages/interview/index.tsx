import { GetStaticProps } from 'next';

import Link from 'next/link'

import { IInterview } from '../../types/IInterview'
import { getAllInterviews } from '../../utils/mdxUtils';

import Item from '../../styles/item'

import { motion } from 'framer-motion';
import StyledMotion from '../../styles/StyledMotion'

type InterviewProps = {
  interviews: IInterview[];
}

const InterviewNav = ({ interviews }: InterviewProps) => {
  return (
    <StyledMotion initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}>
      {
        interviews.map((interviews) => (
          <Item key={interviews.slug}>
            <Link href={`interview/${interviews.slug}`}><a>{interviews.artistName}</a></Link>
          </Item>
        ))
      }
    </StyledMotion>
  )
}


export default InterviewNav

export const getStaticProps: GetStaticProps = async () => {
  const interviews = getAllInterviews([
    'slug',
    'order',
    'artistName',
    'interviewVideo',
    'content'
  ]);

  return { props: { interviews } };
};
