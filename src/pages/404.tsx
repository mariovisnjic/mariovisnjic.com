import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import CenteredLayout from '../components/CenteredLayout';

interface Props {
    errorCode?: number;
}

const Page404: NextPage<Props> = () => {
    return (
        <CenteredLayout>
            <Head>
                <title>Mario Višnjić | Error</title>
            </Head>

            <p>
                404 page not found
                <a href="/">home page</a>
            </p>
        </CenteredLayout>
    );
};

export default Page404;
