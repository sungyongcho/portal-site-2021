import { GetStaticProps, GetStaticPaths } from 'next';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getAllTexts, getTextPost } from '../../utils/mdxUtils';
import { IText } from '../../types/IText';

import styled from 'styled-components'
import { media } from "../../styles/theme";
import ContentLayout from '../../styles/content-layout'
import ContentHeaderWrapper from '../../styles/content-header-wrapper'
import ContentWrapper from '../../styles/content-wrapper'



type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IText, 'slug' | 'order'>;
};

const components = {
};

const TextPage = ({ source, frontMatter }: Props) => {
  return (
    <>
      <ContentLayout>
        <ContentHeaderWrapper>
          <CriticName> {frontMatter.criticName}</CriticName>
          <TextTitle>{frontMatter.textTitle}</TextTitle>
        </ContentHeaderWrapper>
        <ContentWrapper>
          <MDXRemote {...source} components={components} />
        </ContentWrapper>
      </ContentLayout >
    </>
  )
}

export default TextPage

const CriticName = styled.p`
  font-size: 2rem;
  margin-right: 1%;
  ${media.tablet} {
    font-size: 2.5rem;
  }
`;

const TextTitle = styled.p`
  font-size: 1.7rem;
  ${media.tablet} {
    font-size: 2.5rem;
  }
`;


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = getTextPost(params?.slug as string);

  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllTexts(['slug']);

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
