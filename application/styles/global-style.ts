import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
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
        font-family: 'Noto Sans KR', sans-serif;
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
    p {
      /* word-break: normal; */
      word-break: break-all;
      font-size: 1.2em;
      ${media.tablet}{
        line-height: -1%;
        padding-bottom: 1%;
      }
      ${media.desktop}{
        line-height: -1%;
        padding-bottom: 2%;
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

    /* slider config */
    /* mobile */

    .slider-mobile .slick-slider {
      width: 100%;
      overflow: hidden;
    }

    .slider-mobile .slick-slide div {
    }

    .slider-mobile .slick-slide img {
      height: 20vh;
    }

      /* desktop */
     .slider-desktop .slick-slider {
      width: 100%;
      overflow: hidden;
    }
    .slider-desktop .slick-list {
      position: relative;
      display: block !important;
      width: 150%;
    }
    .slider-desktop .slick-slide div {
      width: auto;
      margin-right: 20px;
    }
    .slider-desktop .slick-slide img {
      width: calc(100% - 10px) !important;
      height: 25vh;
      ${media.desktop}{
        height: 35vh;
      }
    }


    /* slider config */

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
    /* slider config */

  /* menu transition */
    .menu-items{
      margin-bottom: 5%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: top;
      background: transparent;
      position:relative;
      text-align: center;
      ${media.desktop}{
        margin-bottom: 5%;
      }
    }

  @keyframes slide {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
}
  .item-enter {
	opacity: 0;
  /* animation: smoothAppear 1s; */
  }
  .item-enter-active {
	opacity: 1;
  animation:  opacity 0.5s ease-in-out;
  /* animation: opacity 0.2s ease-in; */
  }
  .item-exit {
	opacity: 1;
  }
  .item-exit-active {
    opacity: 0;
    animation: all 0.1s ease-in;
}
  /* menu transition */

  .child {
	position: fixed;
	background: indigo;
	top: 50%;
	right: 50%;
	/* transform: translate(50%, -50%); */
  }
  .hide {
    width:0;
  /* transform: translate(50%, -50%); */
  }
`;
