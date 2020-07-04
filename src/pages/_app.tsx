import App from 'next/app';
import Head from 'next/head';
import React from 'react';

class MyApp extends App {
    render(): JSX.Element {
        const { pageProps, Component } = this.props;
        return (
            <>
                <Head>
                    <title>Mario Višnjić</title>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <Component {...pageProps} />
            </>
        );
    }
}

export default MyApp;
