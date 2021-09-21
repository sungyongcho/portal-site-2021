import { GetStaticProps, GetStaticPaths } from 'next';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getAllExhibitions, getExhibitionPost } from '../../utils/mdxUtils';
import { IExhibition } from '../../types/IExhibition';
import ExhibitionBody from '../../components/exhibition-body';

import { AnimatePresence, motion } from 'framer-motion'

import styled from 'styled-components'
import { media } from "../../styles/theme";
import ContentLayout from '../../styles/content-layout'
import ContentHeaderWrapper from '../../styles/content-header-wrapper'
import ContentWrapper from '../../styles/content-wrapper'


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
      <ExhibitionLayout>
        <ExhibitionHeaderWrapper>
          <ArtistName>{frontMatter.artistName}</ArtistName>
          <ExhibitionTitle> {frontMatter.exhibitionTitle}</ExhibitionTitle>
        </ExhibitionHeaderWrapper>
        <ExhibitionWrapper>
          <MDXRemote {...source} components={components} />
        </ExhibitionWrapper>
      </ExhibitionLayout>
    </>
  )
}

export default ExhibitionPage

const ExhibitionLayout = styled.div`
  height: 100%;
  margin-top: 20%;
  margin-left: 0%;
  margin-right: 0%;
  font-size: 1.2em;
  ${media.tablet} {
    margin-top: 6%;
    margin-left: 0%;
    margin-right: 0%;
    font-size: 2em;
  }
  ${media.desktop}{
    margin-top: 12%;
    margin-left: 0%;
    margin-right: 0%;
    font-size: 2em;
  }
  `;

const ExhibitionHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  align-items: flex-end;
  justify-content: left;
  margin-left: 3%;
  margin-bottom: 3%;
  ${media.tablet} {
    padding-top: 10%;
    margin-bottom: 4%;
    margin-left: 4%;
  }
  ${media.desktop} {
    padding-top: 1%;
    margin-bottom: 2%;
    margin-left: 4%;
  }
`;


const ExhibitionWrapper = styled.div`
  border: 0.1em solid #EFEFEF;
  width: 85vw;
  height: 80vh;
  border-radius: 20px;
  padding: 0;
  margin: 0;
  overflow: scroll;
  box-sizing: "border-box";
  ${media.tablet}{
    width: 75vw;
    height: 70vh;
  }
  ${media.desktop}{
    width: 70vw;
    height: 76vh;
  }
`;

const ArtistName = styled.p`
font-size: 1.2em;
`;
const ExhibitionTitle = styled.p`
font-size: 1.2em;
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
