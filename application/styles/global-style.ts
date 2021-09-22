import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Noto Sans KR';
      src: url('../public/fonts/noto-sans-kr-v21-latin-regular.eot'); /* IE9 Compat Modes */
      src: local(''),
          url('../public/fonts/noto-sans-kr-v21-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../public/fonts/noto-sans-kr-v21-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
          url('../public/fonts/noto-sans-kr-v21-latin-regular.woff') format('woff'), /* Modern Browsers */
          url('../public/fonts/noto-sans-kr-v21-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
          url('../public/fonts/noto-sans-kr-v21-latin-regular.svg#NotoSansKR') format('svg'); /* Legacy iOS */
    }
    ${reset}
    constant(safe-area-inset-top)
constant(safe-area-inset-right)
constant(safe-area-inset-bottom)
constant(safe-area-inset-left)
// iOS 11.2 이상
env(safe-area-inset-top)
env(safe-area-inset-right)
env(safe-area-inset-bottom)
env(safe-area-inset-left)

/* 위 속성만 넣어도 기본 padding 값이 있어서 늘어납니다. 값을 더 추가하면 기본값 + 더한값 표현 됩니다.*/

.header {
	padding: 0 0 calc(constant(safe-area-inset-top) + 5px);
    padding: 0 0 calc(env(safe-area-inset-top) + 5px);
}
.footer {
    padding: 0 0 calc(constant(safe-area-inset-bottom));
    padding: 0 0 calc(env(safe-area-inset-bottom));
}
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
        font-family: "Noto Sans KR", sans-serif;
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
      background-color: #EFEFEF;
      height: 1px;
      border: 0;
    }
    //mdx 헤더
    h1 {
      font-size: 1.5em;
      padding-bottom: 3%;
      ${media.tablet}{
        padding-bottom: 2%;
      }
      ${media.desktop}{
        padding-bottom: 1%;
      }
    }
    h2 {
      font-size: 1.5em;
      padding-bottom: 3%;
      ${media.tablet}{
        padding-bottom: 1%;
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
`;
