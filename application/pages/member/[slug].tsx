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
import MemberContentLayout from '../../styles/member-content-layout'
import ContentHeaderWrapper from '../../styles/content-header-wrapper'
import ContentBottomPadding from '../../styles/content-bottom-padding'
import ContentWrapper from '../../styles/content-wrapper'
import ContentLogo from '../../components/ContentLogo'
import HeadInfo from 'components/HeadInfo';

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IMember, 'order'>;
  memberPath: string;
};

const components = {
  MemberProfile,
  MemberWorklist,
  MemberContact
};


const MemberPage = ({ source, frontMatter, memberPath }: Props) => {
  return (
    <>
      <HeadInfo title={"Member"} artist={frontMatter.memberName} siteAddress={`member/${memberPath}`} />
      <ContentLogo />
      <MemberContentLayout>
        <ContentHeaderWrapper>
          <MemberName> {frontMatter.memberName}</MemberName>
          <MemberGenre>{frontMatter.genre}</MemberGenre>
        </ContentHeaderWrapper>
        <ContentWrapper>
          <MDXRemote {...source} components={components} />
        </ContentWrapper>
        <ContentBottomPadding />
      </MemberContentLayout >
    </>
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
  font-size: 1.3rem;
  ${media.tablet} {
    font-size: 1.9rem;
  }
  ${media.desktop} {
    font-size: 1.8rem;
  }
`;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = getMemberPost(params?.slug as string);

  const mdxSource = await serialize(content, { scope: data });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      memberPath: params.slug
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
