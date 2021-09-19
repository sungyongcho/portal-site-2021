import { GetStaticProps, GetStaticPaths } from 'next';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { IMember } from '../../types/IMember';
import { getAllMemberPosts, getMemberPost } from '../../utils/mdxUtils';
import MemberContact from '../../components/member-contact'
import MemberProfile from '../../components/member-profile'
import MemberWorklist from '../../components/member-worklist'

import styled from 'styled-components'

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
      [아티스트 이름: {frontMatter.memberName}]
      [아티스트 장르: {frontMatter.genre}]
      <MDXRemote {...source} components={components} />
    </MemberLayout >
  )
}

export default MemberPage

const MemberLayout = styled.div`
overflow: scroll;
margin-top: 10%;
`


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
