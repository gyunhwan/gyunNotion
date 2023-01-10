import '../styles/globals.css';

import type { AppProps } from 'next/app';
import '../styles/Editor.css';
const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps}></Component>;
};

export default App;
