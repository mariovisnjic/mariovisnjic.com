import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import React from 'react';

import CenteredLayout from '../components/CenteredLayout';
import PageInfoWidget from '../components/PageInfoWidget';

interface Props {
    errorCode: number;
}

const Error: NextPage<Props> = (props: Props) => {
    return (
        <CenteredLayout>
            <Head>
                <title>Mario Višnjić | Error</title>
            </Head>

            {props.errorCode === 404 ? (
                <p>
                    Page not found. Return to{' '}
                    <a href="/">home page</a>
                </p>
            ) : (
                <p>Some error has occured</p>
            )}

            <PageInfoWidget position="top">
                <div>
                    Chrome extension is made with HTML, CSS, JS and Chrome api
                    for controlling tabs, reading URLs and saving notes to user.
                </div>
                <br />
                <a href="https://mariovisnjic.com">
                    <img
                        src="../static/common/home.png"
                        alt="homeIcon"
                        style={{ height: '30px' }}
                    />
                </a>
                <a
                    href="https://github.com/mariovisnjic/chromeNotesExtension"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="../static/common/GitHub-Logo.png"
                        alt="gitHubLogo"
                        style={{ height: '30px', marginLeft: '10px' }}
                    />
                </a>
            </PageInfoWidget>
        </CenteredLayout>
    );
};

Error.getInitialProps = (context: NextPageContext): Props => {
    const errorCode = context.res
        ? context.res.statusCode
        : context.xhr
        ? context.xhr.status
        : null;
    return { errorCode };
};

export default Error;
