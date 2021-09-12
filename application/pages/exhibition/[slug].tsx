import { GetStaticProps, GetStaticPaths } from 'next';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getAllExhibitions, getExhibitionPost } from '../../utils/mdxUtils';
import { IExhibition } from '../../types/IExhibition';
import ExhibitionBody from '../../components/exhibition-body';

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IExhibition, 'slug' | 'order'>;
};


const ExhibitionPage = ({ source, frontMatter }: Props) => {
  return (
    <div>
      [아티스트 이름: {frontMatter.artistName}]
      [작품 제목: {frontMatter.exhibitionTitle}]
      <ExhibitionBody vr={frontMatter.exhibitionUrl}></ExhibitionBody>
    </div>
  )
}

export default ExhibitionPage


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
