import { GetStaticProps, GetStaticPaths } from 'next';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getAllTexts, getTextPost } from '../../utils/mdxUtils';
import { IText } from '../../types/IText';
import TextContent from '../../components/TextContent';

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IText, 'slug' | 'order'>;
};


const interviewPage = ({ source, frontMatter }: Props) => {
  return (
    <div>
      [비평가 이름 이름: {frontMatter.criticName}]
      [텍스트 제목: {frontMatter.textTitle}]
      <TextContent content={frontMatter.textContent}></TextContent>
    </div>
  )
}

export default interviewPage


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = getTextPost(params?.slug as string);

  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllTexts(['slug']);

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
