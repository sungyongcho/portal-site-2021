import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: "Noto Sans KR";
      src: url('../public/fonts/noto-sans-kr-v21-latin-regular.eot'); /* IE9 Compat Modes */
      src: local(''),
          url('./public/fonts/noto-sans-kr-v21-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('./public/fonts/noto-sans-kr-v21-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
          url('./public/fonts/noto-sans-kr-v21-latin-regular.woff') format('woff'), /* Modern Browsers */
          url('./public/fonts/noto-sans-kr-v21-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
          url('./public/fonts/noto-sans-kr-v21-latin-regular.svg#NotoSansKR') format('svg'); /* Legacy iOS */
    }
    ${reset}

    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    html{
        overflow:hidden;
        color: #EFEFEF;
        height: 100%;
        width: 100%;
        background-color: #EFEFEF;
        font-size: 11px;
        -webkit-text-size-adjust: none;
        font-family: 'Noto Sans KR',  sans-serif;
        font-display: fallback;
        /* font-weight: 300!important;
      	letter-spacing: -0.01em!important; */
        ${media.tablet}{
            font-size: 10px;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
        height: -webkit-fill-available;
    }
    body {
     min-height: 100vh;
     /* mobile viewport bug fix */
     min-height: -webkit-fill-available;
    }
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }
    a:hover {
      cursor:pointer;
    }
    // ----------MDX----------
    //mdx 보더라인 색상, 굵기
    hr {
      background-color: #EFEFEF;
      height: 1px;
      border: 0;
      ${media.desktop}{
        margin-bottom: 2.5%;
      }
    }
    //mdx 헤더
    h1 {
      font-size: 1.5em;
      padding-bottom: 3%;
      ${media.tablet}{
        padding-bottom: 2%;
      }
      ${media.desktop}{
        margin-bottom: 0.5%;
      }
    }
    h2 {
      font-size: 1.5em;
      padding-bottom: 3%;
      ${media.tablet}{
        padding-bottom: 1%;
      }
      ${media.desktop}{
        margin-bottom: 0.5%;
      }

    }
    h3 {
      font-size: 1.2em;
      padding-bottom: 3%;
      ${media.tablet}{
        padding-bottom: 1%;
      }
      ${media.desktop}{
        padding-bottom: 1%;
      }
    }
    li {
      list-style-position: inside;
      text-indent: 1em;
      margin:0px; padding:0px;
      ${media.tablet}{
        line-height: -1%;
        padding-bottom: 1%;
      }
      ${media.desktop}{
        line-height: -1%;
        padding-bottom: 1%;
      }
    }
    // ---------MDX------------

    // 링크 색상
    a, a:hover, a:visited, a:active {
      color: inherit;
      text-decoration: none;
    }
    .desktop-tablet-only {
        display: flex;
        ${media.mobile} {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
        ${media.tablet}{
            display:flex;
        }
    }
    .mobile-only {
        display: none;
        ${media.mobile} {
            display: flex;
        }
    }
.slick-slider {
  width: 100%;
  overflow: hidden;
}
.slick-list {
  position: relative;
  display: block !important;
  width: 150%;
}
.slick-slide div {
  width: auto;
  margin-right: 20px;
}
.slick-slide img {
  width: calc(100% - 10px) !important;
  height: 35vh;
}

.custom-img {
  object-fit: contain;
  width: 100% !important;
  position: relative !important;
  height: unset !important;
}

.unset-img {
  width: 30%;
}
.unset-img > div {
  position: unset !important;
}

`;
