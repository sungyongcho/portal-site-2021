import { GetStaticProps } from 'next';

import Link from 'next/link'

import { IInterview } from '../../types/IInterview'
import { getAllInterviews } from '../../utils/mdxUtils';

import styled from 'styled-components'
import { motion } from 'framer-motion';

type InterviewProps = {
  interviews: IInterview[];
}

const InterviewNav = ({ interviews }: InterviewProps) => {
  return (
    <InterviewList>
      {interviews.map((interviews) => (
        <InterviewItem key={interviews.slug}>
          <Link href={`interview/${interviews.slug}`}><a>{interviews.artistName}</a></Link>
        </InterviewItem>
      ))}
    </InterviewList>
  )
}

const InterviewList = styled(motion.div)`
`

const InterviewItem = styled(motion.div)`
  font-size: 1.8em;
  padding: 0 0.5em;
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
