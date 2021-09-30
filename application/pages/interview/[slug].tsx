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
import ContentWrapper from 'styles/content-wrapper';
import ContentLogo from '../../components/ContentLogo'
import ContentPaddingTop from 'styles/content-padding-top';
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
      <ContentLogo />
      <FlexTest>
        <WrapperTest>
          <ContentHeaderWrapper>
            <InterviewTitle> {frontMatter.interviewTitle}</InterviewTitle>
          </ContentHeaderWrapper>
          <ContentWrapper>
            <MDXRemote {...source} components={components} />
          </ContentWrapper>
        </WrapperTest>
      </FlexTest>
    </>
  )
}

const InterviewTitle = styled.p`
  font-size: 2rem;
  ${media.tablet} {
    font-size: 2.5rem;
  }
`;

const FlexTest = styled.p`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  flex-direction: column;
`;

const WrapperTest = styled.div`
  top:5vh;
  position:relative;
  width:100%;
`;

const ContentFooter = styled.div`
  padding-bottom: 10vh;
`;

const ContentPaddingBottom = styled.div`
  position: absolute;
  display: block;
  left:0;
  bottom:0;
  width:100%;
  height:15vh;
  background-color: black;
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
