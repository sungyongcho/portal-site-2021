import { GetStaticProps } from 'next';

import Link from 'next/link'
import router from 'next/router'

import { IText } from '../../types/IText';
import { getAllTexts } from '../../utils/mdxUtils';

import styled from 'styled-components'
import { motion } from 'framer-motion';


type TextProps = {
  texts: IText[];
}

const TextNav = ({ texts }: TextProps) => {
  return (
    <TextList>
      {texts.map((texts) => (
        <TextItem key={texts.slug}>
          <Link href={`texts/${texts.slug}`}><a>{texts.criticName}</a></Link>
        </TextItem>
      ))}
    </TextList>
  )
}

const TextList = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-around;
`

const TextItem = styled(motion.div)`
  font-size: 1.8em;
  padding: 0 0.5em;
`

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
