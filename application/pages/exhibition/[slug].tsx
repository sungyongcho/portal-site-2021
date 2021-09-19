import { GetStaticProps, GetStaticPaths } from 'next';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getAllExhibitions, getExhibitionPost } from '../../utils/mdxUtils';
import { IExhibition } from '../../types/IExhibition';
import ExhibitionBody from '../../components/exhibition-body';
import styled from 'styled-components';
import { media } from "../../styles/theme";

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IExhibition, 'slug' | 'order'>;
};

const components = {
  ExhibitionBody,
};


const ExhibitionPage = ({ source, frontMatter }: Props) => {
  return (
    <>
      <ExhibitionWrapper>
        <ArtistName>{frontMatter.artistName}</ArtistName>
        <ExhibitionTitle> {frontMatter.exhibitionTitle}</ExhibitionTitle>
      </ExhibitionWrapper>
      <ExhibitionLayout>

        <MDXRemote {...source} components={components} />
      </ExhibitionLayout>

    </>
  )
}

export default ExhibitionPage

const ExhibitionLayout = styled.div`
  box-sizing: "border-box";
  padding-left: 0;
  padding-right: 0;
  ${media.desktop} {
    width: 80em;
  }
  ${media.tablet} {
    width: 60em;
  }
  ${media.mobile} {
    width: 34rem;
    height: 45rem;
  }
`;


const ExhibitionWrapper = styled.div`
  overflow: scroll;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ArtistName = styled.p`
font-size: 2.5em;
`;
const ExhibitionTitle = styled.p`
font-size: 2.5em;
`;




export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = getExhibitionPost(params?.slug as string);

  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllExhibitions(['slug']);

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

//ref: https://stackoverflow.com/questions/1125084/how-to-make-the-window-full-screen-with-javascript-stretching-all-over-the-scre/7525760#7525760
