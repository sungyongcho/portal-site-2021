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
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      {/* TODO: og 기본값 세팅 */}
      <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      <meta property="og:title" content="" />
      <meta property="og:image" content="" />
      <meta property="og:description" content="" />
      <meta property="og:url" content="//" />
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap"
        rel="preload"
        as="style"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
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
