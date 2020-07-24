import App from 'next/app';
import React from 'react';

class MyApp extends App {
    render(): JSX.Element {
        const { pageProps, Component } = this.props;
        return (
            <>
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
