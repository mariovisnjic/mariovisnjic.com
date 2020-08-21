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
                    <meta charSet="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                {/*static form needed for netlify*/}
                <form
                    name="contact"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    hidden={true}
                >
                    <input type="text" name="userName" />
                    <input type="email" name="email" />
                    <textarea name="message" />
                </form>
                <Component {...pageProps} />
                <style jsx global>{`
                    body {
                        margin: 0;
                        font-family: 'Source Sans Pro', sans-serif;
                    }
                `}</style>
            </>
        );
    }
}

export default MyApp;
