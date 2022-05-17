import { ThemeProvider } from 'styled-components';
import GlobalStyle from './global-style';

export const theme = {
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
    oddSection: '#050505'
  },
  gradients: {
    purple: {
      default: "rgba(149, 76, 233, 1)",
      half: "rgba(149, 76, 233, 0.5)",
      quarter: "rgba(149, 76, 233, 0.25)",
      zero: "rgba(149, 76, 233, 0)"
    }
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