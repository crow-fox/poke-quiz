import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Router } from "./router/Router";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  ${reset}
  
 :root {
    --c-white: #f9f9f9;
    --c-light: #f0f0f0;
    --c-gray: #ddd;
    --c-black: #333;
    --c-red: #ef5545;

    --c-border: var(--c-gray);

 --ratio: 1.7;
  --num: 8;
  --fontBase: clamp(1rem, 0.792rem + 0.52vw, calc(1rem * 18 / 16));
  --num2: calc(var(--num) * var(--ratio));

  --f-5: calc(var(--fontBase) * var(--num) / (var(--num) + 5));
  --f-4: calc(var(--fontBase) * var(--num) / (var(--num) + 4));
  --f-3: calc(var(--fontBase) * var(--num) / (var(--num) + 3));
  --f-2: calc(var(--fontBase) * var(--num) / (var(--num) + 2));
  --f-1: calc(var(--fontBase) * var(--num) / (var(--num) + 1));
  --f0: var(--fontBase);
  --f1: calc(var(--fontBase) * var(--num) / (var(--num) - 1));
  --f2: calc(var(--fontBase) * var(--num) / (var(--num) - 2));
  --f3: calc(var(--fontBase) * var(--num) / (var(--num) - 3));
  --f4: calc(var(--fontBase) * var(--num) / (var(--num) - 4));
  --f5: calc(var(--fontBase) * var(--num) / (var(--num) - 5));
  --f6: calc(var(--fontBase) * var(--num) / (var(--num) - 6));


  /* line-heightは短文の場合はfontのスケールと合わせて--f1 --lh-1で指定 */
  /* 長文の場合は極力2に近い数値を指定　もしくは　font-sizeに対してスケールがひとつ小さいline-heightを指定 --f1 --lh0 */
  --lh-6: calc(var(--lh0) * (var(--num2) / (var(--num2) + 6)));
  --lh-5: calc(var(--lh0) * (var(--num2) / (var(--num2) + 5)));
  --lh-4: calc(var(--lh0) * (var(--num2) / (var(--num2) + 4)));
  --lh-3: calc(var(--lh0) * (var(--num2) / (var(--num2) + 3)));
  --lh-2: calc(var(--lh0) * (var(--num2) / (var(--num2) + 2)));
  --lh-1: calc(var(--lh0) * (var(--num2) / (var(--num2) + 1)));
  --lh0: var(--ratio);
  --lh1: calc(var(--lh0) * (var(--num2) / (var(--num2) - 1)));
  --lh2: calc(var(--lh0) * (var(--num2) / (var(--num2) - 2)));
  
  
  --s-5: calc(var(--s-4) / var(--ratio));
  --s-4: calc(var(--s-3) / var(--ratio));
  --s-3: calc(var(--s-2) / var(--ratio));
  --s-2: calc(var(--s-1) / var(--ratio));
  --s-1: calc(var(--s0) / var(--ratio));
  --s0: calc(16px * var(--lh0));
  --s1: calc(var(--s0) * var(--ratio));
  --s2: calc(var(--s1) * var(--ratio));
  --s3: calc(var(--s2) * var(--ratio));
  --s4: calc(var(--s3) * var(--ratio));
  --s5: calc(var(--s4) * var(--ratio));

  --container: calc(1rem * 480 / 16);
  /* --container: 500px; */

}

  *, *::before, *::after {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-size: var(--f0);
    line-height: var(--lh0);
    color: var(--c-black);
    background-color: var(--c-light);
    overflow-wrap: anywhere;

    background-image: radial-gradient(white 10%, rgba(0, 0, 0, 0) 10.5%),
    radial-gradient(rgba(0, 0, 0, 0) 30%, white 30.5%),
    linear-gradient(var(--c-gray) 50%, var(--c-white) 50%);
    background-size: calc(var(--s2) * 2) calc(var(--s2) * 2);
    background-position: center;
  }

  button {
    border: 0;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }

  dialog {
    border: 0;
  }
`;
