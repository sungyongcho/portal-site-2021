import { GetStaticProps } from 'next';

import Link from 'next/link'
import router from 'next/router'

import { IInterview } from '../../types/IInterview'
import { getAllArtistPosts, getAllInterviews } from '../../utils/mdxUtils';

type InterviewProps = {
  interviews: IInterview[];
}

const InterviewNav = ({ interviews }: InterviewProps) => {
  return (
    <>
      <div>
        <nav>
          <ul>
            {interviews.map((interviews) => (
              <div key={interviews.slug}>
                <li>
                  <Link href={`interview/${interviews.slug}`}><a>{interviews.artistName}</a></Link>
                </li>
              </div>
            ))}
          </ul>
        </nav>
      </div>
    </>
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
