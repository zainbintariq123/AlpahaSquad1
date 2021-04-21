import '../styles/globals.css';
import {config, library} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
// config.autoAddCss = false  // tell Font awesome to skip adding the css functionality since it is being imported

import Head from "next/head";
import { faAngleUp, faAngleDown, faSearch, faFilter, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons';

library.add(fab, faFacebook, faCoffee, faAngleUp, faAngleDown, faSearch, faFilter, faAngleLeft, faAngleRight);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,400;0,900;1,900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400&family=Manrope&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
    </>)
}

export default MyApp
