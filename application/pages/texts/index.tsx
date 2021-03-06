import { GetStaticProps } from 'next';
import HeadInfo from '../../components/HeadInfo';

import Link from 'next/link'
import router from 'next/router'

import { IText } from '../../types/IText';
import { getAllTexts } from '../../utils/mdxUtils';

import styled from 'styled-components'
import { motion } from 'framer-motion';
import Item from '../../styles/item'
import StyledMotion from '../../styles/StyledMotion'

import { useRouter } from 'next/router';

type TextProps = {
  texts: IText[];
}


const TextNav = ({ texts }: TextProps) => {

  const router = useRouter();
  const goToRecruit = () => {
    router.push('/texts/leedayoung').then(() => window.scrollTo(0, 0));
  };

  return (
    <>
      <HeadInfo title={"Texts"} siteAddress={'texts'} />
      <StyledMotion initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}>
        <HeadInfo title="Texts"></HeadInfo>
        {
          texts.map((texts) => (
            <Item key={texts.slug}>
              <Link href={`texts/${texts.slug}`}><a>{texts.textMenuName}</a></Link>
              <ButtonTest name='탑승하기' onClick={goToRecruit} />

            </Item>
          ))
        }
      </StyledMotion>
    </>
  )
}

const ButtonTest = styled.button`
`;

export default TextNav

export const getStaticProps: GetStaticProps = async () => {
  const texts = getAllTexts([
    'slug',
    'order',
    'textMenuName',
    'criticName',
    'content'
  ]);

  return { props: { texts } };
};
