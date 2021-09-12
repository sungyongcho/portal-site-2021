import React from 'react'
import Head from 'next/head'

type Props = {
  title: string,
  keyword: string,
  contents: string;
}
const HeadInfo = ({ title, keyword, contents }: Props) => {
  return (
    <Head>
      <title>Portal Site -- 포털사이트 {title}</title>
      {/* <meta keyword={keyword}></meta>
      <meta contents={contents}></meta> */}
    </Head>
  )
}

HeadInfo.defaultProps = {
  title: 'title',
  keyword: 'portal site 2021',
  contents: 'nextjs building'
}

export default HeadInfo;
