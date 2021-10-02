import { GetStaticProps, GetStaticPaths } from 'next';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getAllExhibitions, getExhibitionPost } from '../utils/mdxUtils';
import { IExhibition } from '../types/IExhibition';
import ExhibitionBody from '../components/exhibition-body';

import { AnimatePresence, motion } from 'framer-motion'

import styled from 'styled-components'
import { media } from "../styles/theme";
import ContentLayout from '../styles/content-layout'
import ContentHeaderWrapper from '../styles/content-header-wrapper'
import ContentWrapper from '../styles/content-wrapper'
import ContentLogo from '../components/ContentLogo'
import HeadInfo from 'components/HeadInfo';


const components = {
  ExhibitionBody,
};

const ExhibitionPage = () => {
  return (
    <>
      <HeadInfo title={"Exhibition"} />
      <ContentLogo />
      <ExhibitionLayout>
        <ExhibitionWrapper>
          <ExhibitionBody vr={'https://vr.portalsite.xyz/'} />
        </ExhibitionWrapper>
      </ExhibitionLayout>
    </>
  )
}

export default ExhibitionPage

const ExhibitionLayout = styled.div`
  height: 80vh;
  font-size: 1.2em;
  overflow: hidden;
  ${media.tablet} {
    margin-top: 6%;
    margin-left: 0%;
    margin-right: 0%;
    font-size: 2em;
  }
  ${media.desktop}{
    margin-top: 0%;
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
    padding-top: 0;
    margin-bottom: 2%;
    margin-left: 4%;
  }
`;


const ExhibitionWrapper = styled.div`
  border: 0.1em solid #EFEFEF;
  width: 80vw;
  height: 65vh;
  border-radius: 20px;
  margin-top: 8vh;
  padding: 0;
  overflow: scroll;
  box-sizing: "border-box";
  ${media.tablet}{
    margin-top: 18%;
    width: 75vw;
    height: 70vh;
  }
  ${media.desktop}{
    margin-top: 13vh;
    width: 55vw;
    height: 72vh;
  }
`;

const ArtistName = styled.p`
font-size: 1.2em;
`;
const ExhibitionTitle = styled.p`
font-size: 1.2em;
`;



