import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths } from 'next';
import dynamic from 'next/dynamic';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { IArtist } from '../../types/IArtist';
import { getPost, getAllArtistPosts } from '../../utils/mdxUtils';

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IArtist, 'slug' | 'order'>;
};


const artistPage: NextPage = ({ source, frontMatter }: Props) => {
  const router = useRouter();
  return (
    <div>
      아티스트 이름 {frontMatter.artistName} <br />
      아티스트 소개 {frontMatter.contact}
    </div>
  )
}

export default artistPage


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = getPost(params?.slug as string);

  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllArtistPosts(['slug']);

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
