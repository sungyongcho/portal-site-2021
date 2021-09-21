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
        height: 100%;
        width: 100%;
        background-color: gray;
        font-size: 11px;
        -webkit-text-size-adjust: none;
        font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;
        font-display: fallback;
        ${media.tablet}{
            font-size: 10px;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
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
    // ----------MDX----------
    //mdx 보더라인 색상, 굵기
    hr {
      background-color: black;
      height: 1px;
      border: 0;
    }
    //mdx 헤더
    h1 {
      font-size: 1.5em;
      padding-bottom: 3%;
    }
    h2 {
      font-size: 1.5em;
      padding-bottom: 3%;
    }
    h3 {
      font-size: 1.2em;
      padding-bottom: 3%;
    }
    li {
      list-style-position: inside;
      margin:0px; padding:0px;
    }
    // ---------MDX------------
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
`;
