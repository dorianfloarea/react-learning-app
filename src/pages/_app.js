import React from 'react';
import {GlobalStyles} from '../Global.styles';
import Header from '../components/common/Header';
import Head from 'next/head';

const App = ({Component, pageProps}) => (
    <>
        <Head>
            <meta charSet="utf-8"/>
            {/*<link rel="icon" href="%PUBLIC_URL%/favicon.ico"/>*/}
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="theme-color" content="#000000"/>
            <meta
                name="description"
                content="Web site created using create-react-app"
            />
            {/*<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png"/>*/}
            <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"/>
            <title>React App</title>
        </Head>
        <Header/>
        <Component {...pageProps} />
        <GlobalStyles/>
    </>
);

export default App;
