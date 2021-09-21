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
  console.log(source);
  return (
    <MemberLayout>
      <MemberHeaderWrapper>
        <MemberName> {frontMatter.memberName}</MemberName>
        <MemberGenre>{frontMatter.genre}</MemberGenre>
      </MemberHeaderWrapper>
      <MemberContentWrapper>
        <MDXRemote {...source} components={components} />
      </MemberContentWrapper>
    </MemberLayout >
  )
}

export default MemberPage

const MemberLayout = styled.div`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  margin-top: 15%;
  margin-left: 6%;
  margin-right: 6%;
  padding-bottom: 3em;
  font-size: 1.2em;
  ${media.tablet} {
    margin-top: 10%;
    margin-left: 4%;
    margin-right: 4%;
    padding-bottom: 0;
  }
`

const MemberHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding-left: 3%;
  padding-bottom: 3%;
  ${media.tablet} {
    padding-bottom: 1.5%;
    padding-left: 4%;
  }
`;

const MemberName = styled.p`
  font-size: 2rem;
  ${media.tablet} {
    font-size: 2.5rem;
  }
`;


const MemberGenre = styled.p`
  font-size: 2rem;
  ${media.tablet} {
    font-size: 2.5rem;
  }
`;

const MemberContentWrapper = styled.div`
  border: 0.15em solid black;
  border-radius: 20px;
  padding: 5%;
  overflow: scroll;
  box-sizing: "border-box";
  ${media.tablet} {
    padding: 4%;
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
