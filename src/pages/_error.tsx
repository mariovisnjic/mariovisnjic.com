import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import CenteredLayout from '../components/CenteredLayout';

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
        </CenteredLayout>
    );
};

export default Error;
