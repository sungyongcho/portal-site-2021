import { GetStaticProps } from 'next';

import Link from 'next/link'
import router from 'next/router'

import { IText } from '../../types/IText';
import { getAllTexts } from '../../utils/mdxUtils';

type TextProps = {
  texts: IText[];
}

const TextNav = ({ texts }: TextProps) => {
  return (
    <>
      <div>
        <nav>
          <ul>
            {texts.map((texts) => (
              <div key={texts.slug}>
                <li>
                  <Link href={`texts/${texts.slug}`}><a>{texts.criticName}</a></Link>
                </li>
              </div>
            ))}
          </ul>
        </nav>
      </div>
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
