import { GetStaticProps, GetStaticPaths } from 'next';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getAllInterviews, getInterviewPost } from '../../utils/mdxUtils';
import { IInterview } from '../../types/IInterview';
import InterviewBody from '../../components/interview-body';

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IInterview, 'slug' | 'order'>;
};


const interviewPage = ({ source, frontMatter }: Props) => {
  return (
    <div>
      [아티스트 이름: {frontMatter.artistName}]
      [인터뷰 제목: {frontMatter.interviewTitle}]
      <InterviewBody video={frontMatter.interviewVideo} text={frontMatter.interviewText}></InterviewBody>
    </div>
  )
}

export default interviewPage


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = getInterviewPost(params?.slug as string);

  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllInterviews(['slug']);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
