import { GetStaticProps, GetStaticPaths } from 'next';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getAllInterviews, getInterviewPost } from '../../utils/mdxUtils';
import { IInterview } from '../../types/IInterview';
import InterviewBody from '../../components/interview-body';

import styled from 'styled-components'
import { media } from "../../styles/theme";
import ContentLayout from '../../styles/content-layout'
import ContentHeaderWrapper from '../../styles/content-header-wrapper'

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IInterview, 'slug' | 'order'>;
};

const components = {
  InterviewBody,
};


const interviewPage = ({ source, frontMatter }: Props) => {
  return (
    <ContentLayout>
      <ContentHeaderWrapper>
        <InterviewTitle> {frontMatter.interviewTitle}</InterviewTitle>
      </ContentHeaderWrapper>
      <InterviewWrapper>
        <MDXRemote {...source} components={components} />
      </InterviewWrapper >

    </ContentLayout>
  )
}

const InterviewTitle = styled.p`
  font-size: 2rem;
  ${media.tablet} {
    font-size: 2.5rem;
  }
`;

const InterviewWrapper = styled.div`
  border: 0.15em solid black;
  border-radius: 20px;
  padding: 5%;
  overflow: scroll;
  box-sizing: "border-box";
  ${media.tablet} {
    padding: 4%;
  }
`;



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
