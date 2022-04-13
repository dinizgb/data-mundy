import { ThemeProvider } from 'styled-components';
import GlobalStyle from './global-style';

const theme = {
  colors: {
    background: '#151515',
    primary: '#b27d3c',
    primary_hover: '#c9893a',
    secondary: '#252525',
    secondary_hover: '#292929',
    subtitle: '#999',
    text_1: '#333',
    text_2: '#aaa',
    text_3: '#ccc',
    text_4: '#fff',
  },
  breakpoints: {
    md: 900,
    sm: 600
  }
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}