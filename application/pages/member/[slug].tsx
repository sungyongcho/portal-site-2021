import { GetStaticProps, GetStaticPaths } from 'next';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { IMember } from '../../types/IMember';
import { getAllMemberPosts, getMemberPost } from '../../utils/mdxUtils';
import MemberContact from '../../components/member-contact'
import MemberProfile from '../../components/member-profile'
import MemberWorklist from '../../components/member-worklist'

import styled from 'styled-components'
import { media } from "../../styles/theme";
import ContentLayout from '../../styles/content-layout'
import ContentHeaderWrapper from '../../styles/content-header-wrapper'
import ContentWrapper from '../../styles/content-wrapper'

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IMember, 'slug' | 'order'>;
};

const components = {
  MemberProfile,
  MemberWorklist,
  MemberContact
};


const MemberPage = ({ source, frontMatter }: Props) => {
  return (
    <ContentLayout>
      <ContentHeaderWrapper>
        <MemberName> {frontMatter.memberName}</MemberName>
        <MemberGenre>{frontMatter.genre}</MemberGenre>
      </ContentHeaderWrapper>
      <ContentWrapper>
        <MDXRemote {...source} components={components} />
      </ContentWrapper>
    </ContentLayout >
  )
}

export default MemberPage

const MemberName = styled.p`
  font-size: 2rem;
  margin-right: 1%;
  ${media.tablet} {
    font-size: 2.5rem;
  }
`;

const MemberGenre = styled.p`
  font-size: 1.7rem;
  ${media.tablet} {
    font-size: 2.5rem;
  }
`;



export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = getMemberPost(params?.slug as string);

  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllMemberPosts(['slug']);

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
