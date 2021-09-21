import { GetStaticProps } from 'next';
import HeadInfo from '../../components/HeadInfo';

import Link from 'next/link'
import router from 'next/router'

import { IText } from '../../types/IText';
import { getAllTexts } from '../../utils/mdxUtils';

import styled from 'styled-components'
import { motion } from 'framer-motion';
import Item from '../../styles/item'

type TextProps = {
  texts: IText[];
}

const TextNav = ({ texts }: TextProps) => {
  return (
    <>
      <HeadInfo title="Texts"></HeadInfo>
      {
        texts.map((texts) => (
          <Item key={texts.slug}>
            <Link href={`texts/${texts.slug}`}><a>{texts.criticName}</a></Link>
          </Item>
        ))
      }
    </>
  )
}


export default TextNav

export const getStaticProps: GetStaticProps = async () => {
  const texts = getAllTexts([
    'slug',
    'order',
    'criticName',
    'content'
  ]);

  return { props: { texts } };
};
