import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@400,500,600,700&display=swap');
  body{
    
    padding:0;
    margin:0;
    font-family: 'Montserrat', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
        <Component {...pageProps} />
    </>
  );
}
