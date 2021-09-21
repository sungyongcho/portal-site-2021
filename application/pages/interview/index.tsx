import { GetStaticProps } from 'next';

import Link from 'next/link'

import { IInterview } from '../../types/IInterview'
import { getAllInterviews } from '../../utils/mdxUtils';

import styled from 'styled-components'
import { motion } from 'framer-motion';
import Item from '../../styles/item'

type InterviewProps = {
  interviews: IInterview[];
}

const InterviewNav = ({ interviews }: InterviewProps) => {
  return (
    <>
      {
        interviews.map((interviews) => (
          <Item key={interviews.slug}>
            <Link href={`interview/${interviews.slug}`}><a>{interviews.artistName}</a></Link>
          </Item>
        ))
      }
    </>
  )
}


const InterviewItem = styled(motion.div)`
  font-size: 1.8em;
  margin-bottom: 0.5em;
`

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
