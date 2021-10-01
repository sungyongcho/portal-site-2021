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
import ContentLogo from '../../components/ContentLogo'
import ContentBottomPadding from '../../styles/content-bottom-padding'
import HeadInfo from 'components/HeadInfo';


type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IText, 'order'>;
  criticPath: string;
};

const components = {
};

const TextPage = ({ source, frontMatter, criticPath }: Props) => {
  return (
    <>
      <HeadInfo title={"Texts"} artist={frontMatter.criticName} siteAddress={`texts/${criticPath}`} />
      <ContentLayout>
        <ContentLogo />
        <ContentHeaderWrapper>
          <CriticName> {frontMatter.criticName}</CriticName>
          <TextTitle>{frontMatter.textTitle}</TextTitle>
        </ContentHeaderWrapper>
        <ContentWrapper>
          <MDXRemote {...source} components={components} />
        </ContentWrapper>
        <ContentBottomPadding />
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
      criticPath: params.slug
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
