import { GetStaticProps, GetStaticPaths } from 'next';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getAllInterviews, getInterviewPost } from '../../utils/mdxUtils';
import { IInterview } from '../../types/IInterview';
import InterviewBody from '../../components/interview-body';
import styled from 'styled-components';

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IInterview, 'slug' | 'order'>;
};

const components = {
  InterviewBody,
};


const interviewPage = ({ source, frontMatter }: Props) => {
  return (
    <>
      <InterviewHeaderWrapper>
        <InterviewName>{frontMatter.artistName}</InterviewName>
        <InterviewTitle> {frontMatter.interviewTitle}</InterviewTitle>
      </InterviewHeaderWrapper>
      <div>
        <MDXRemote {...source} components={components} />
      </div>
    </>
  )
}

export default interviewPage

const InterviewHeaderWrapper = styled.div`
  overflow: scroll;
  padding-top: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InterviewName = styled.p`
font-size: 2em;
`;
const InterviewTitle = styled.p`
font-size: 2em;
`;

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
