import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

// Manrope - Bold / Manrope - Bold.eot;

export const GlobalStyle = createGlobalStyle`
html {
  /* dark theme */
  &[data-theme='dark'] {
    --background-color: #0A0A11;
    --text-color: #F3F3F3;
    --border-link-color: rgba(243, 243, 243, 0.2);
    --link-color: #F3F3F3;
    --button-color: #F3F3F3;
    --button-hover-color: #161F37;
    --error-color: rgba(243, 243, 243, 0.1 );
  }

  /* light theme */
  &[data-theme='light'] {
    --background-color: #F3F3F3;
    --text-color: #0A0A11;
    --border-link-color: rgba(22, 31, 55, 0.20);
    --link-color: #161F37;
    --button-color: #161F37;
    --button-hover-color: #F3F3F3;
    --error-color: rgba(64, 112, 205, 0.1);
  }
}

@font-face {
  font-family: 'Manrope';
src: url('./src/assets/fonts/Manrope-Bold/Manrope-Bold.eot');
    src: local('Manrope Bold'), local('Manrope-Bold'),
        url('./src/assets/fonts/Manrope-Bold/Manrope-Bold.eot?#iefix') format('embedded-opentype'),
        url('./src/assets/fonts/Manrope-Bold/Manrope-Bold.woff2') format('woff2'),
        url('./src/assets/fonts/Manrope-Bold/Manrope-Bold.woff') format('woff'),
        url('./src/assets/fonts/Manrope-Bold/Manrope-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
  font-family: 'Manrope';
    src: url('./src/assets/fonts/Manrope-SemiBold/Manrope-Semibold.eot');
    src: local('Manrope Semibold'), local('Manrope-Semibold'),
        url('./src/assets/fonts/Manrope-SemiBold/Manrope-Semibold.eot?#iefix') format('embedded-opentype'),
        url('./src/assets/fonts/Manrope-SemiBold/Manrope-Semibold.woff2') format('woff2'),
        url('./src/assets/fonts/Manrope-SemiBold/Manrope-Semibold.woff') format('woff'),
        url('./src/assets/fonts/Manrope-SemiBold/Manrope-Semibold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Manrope';
    src: url('./src/assets/fonts/Manrope-Regular/Manrope-Regular.eot');
    src: local('Manrope Regular'), local('Manrope-Regular'),
        url('./src/assets/fonts/Manrope-Regular/Manrope-Regular.eot?#iefix') format('embedded-opentype'),
        url('./src/assets/fonts/Manrope-Regular/Manrope-Regular.woff2') format('woff2'),
        url('./src/assets/fonts/Manrope-Regular/Manrope-Regular.woff') format('woff'),
        url('./src/assets/fonts/Manrope-Regular/Manrope-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Manrope';
    src: url('./src/assets/fonts/Manrope-Medium/Manrope-Medium.eot');
    src: local('Manrope Medium'), local('Manrope-Medium'),
        url('./src/assets/fonts/Manrope-Medium/Manrope-Medium.eot?#iefix') format('embedded-opentype'),
        url('./src/assets/fonts/Manrope-Medium/Manrope-Medium.woff2') format('woff2'),
        url('./src/assets/fonts/Manrope-Medium/Manrope-Medium.woff') format('woff'),
        url('./src/assets/fonts/Manrope-Medium/Manrope-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}


*,
*::before,
*::after {
  box-sizing: border-box;
}

 body {
margin: 0;
  font-family: 'Manrope';
  font-weight: 400;
  font-style: normal;
font-size:14px;
  color: #111111;
  width: 100%;
  height: 100vh;
  background-color: var(--background-color);
   scroll-behavior: smooth;

 }

 
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
    max-width: 100%;
  height: auto;
}
button {
  cursor: pointer;
  color:inherit;
}

.error-message {
  font-size: 14px;
  color:red;
}
`;
