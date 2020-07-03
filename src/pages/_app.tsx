import App from 'next/app';
import Head from 'next/head';
import React from 'react';

class MyApp extends App {
    render(): JSX.Element {
        const { pageProps, Component } = this.props;
        return (
            <>
                <Head>
                    <title>Page Builder</title>
                    {/** <Favicon /> */}
                </Head>
                <Component {...pageProps} />
            </>
        );
    }
}

export default MyApp;
