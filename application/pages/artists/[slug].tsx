import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths } from 'next';
import dynamic from 'next/dynamic';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { IArtist } from '../../types/IArtist';
import { getAllArtistPosts, getArtistPost } from '../../utils/mdxUtils';
import ArtistBody from '../../components/artist-body';
import ArtistContact from '../../components/artist-contact'
import ArtistProfile from '../../components/artist-profile'
import ArtistWorklist from '../../components/artist-worklist'
import TextContent from '../../components/TextContent'

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IArtist, 'slug' | 'order'>;
};

const components = {
  ArtistProfile,
  ArtistWorklist,
  ArtistContact
};


const artistPage = ({ source, frontMatter }: Props) => {
  console.log(source);
  return (
    <div>
      [아티스트 소개: {frontMatter.artistName}]
      [아티스트 장르: {frontMatter.genre}]
      <MDXRemote {...source} components={components} />
    </div >
  )
}

export default artistPage


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = getArtistPost(params?.slug as string);

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
