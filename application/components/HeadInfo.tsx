import React from 'react'
import Head from 'next/head'

type Props = {
  title: string,
  artist: string,
  description: string,
  siteAddress: string,
  thumbnailAddress: string,
  keyword: string,
  contents: string;
}
const HeadInfo = ({ title, artist, description, thumbnailAddress, siteAddress, keyword, contents }: Props) => {
  return (
    <Head>
      {title === '' ? <title>Portal Site -- 포털사이트</title>
        : (artist === '' ?
          <title>Portal Site -- 포털사이트 : {title}</title>
          : <title>Portal Site -- 포털사이트 : {title} - {artist} </title>)
      }
      <meta name="viewport" content="initial-scale=1.0, width=device-width, viewport-fit=cover" />
      {/* TODO: og 기본값 세팅 */}
      <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      <meta property="og:title" content={title === '' ? `Portal Site -- 포털사이트`
        : (artist === '' ?
          `Portal Site -- 포털사이트 : ${title}`
          : `Portal Site -- 포털사이트 : ${title} - ${artist}`)
      } />
      <meta property="og:image" content={thumbnailAddress === '' ? "https://portalsite.xyz/thumbnail.png" : "https://portalsite.xyz/thumbnail.png"} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteAddress ? `https://portalsite.xyz/${siteAddress}` : 'https://portalsite.xyz'} />
      <meta name="description" content={description} />
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
  title: '',
  artist: '',
  siteAddress: '',
  thumbnailAddress: '',
  description: 'Portal Site -- 포털 사이트',
  keyword: 'portal site 2021',
  contents: 'nextjs building'
}

export default HeadInfo;
