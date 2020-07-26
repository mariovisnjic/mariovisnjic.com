import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import React from 'react';

import CenteredLayout from '../components/CenteredLayout';
import PageInfoWidget from '../components/PageInfoWidget';

interface Props {
    errorCode?: number;
}

const Error: NextPage<Props> = () => {
    return (
        <CenteredLayout>
            <Head>
                <title>Mario Višnjić | Error</title>
            </Head>

            <p>
                Some error has occured. Page probably does not exist. Return to
                <a href="/">home page</a>
            </p>

            <PageInfoWidget position="top">
                <div>
                    Chrome extension is made with HTML, CSS, JS and Chrome api
                    for controlling tabs, reading URLs and saving notes to user.
                </div>
                <br />
                <a href="/">
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

export default Error;
