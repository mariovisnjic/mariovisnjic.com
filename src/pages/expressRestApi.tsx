import styled from '@emotion/styled';
import axios from 'axios';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import Layout from '../components/Layout';
import PageInfoWidget from '../components/PageInfoWidget';
import TitleSection from '../components/TitleSection';

const DisplayWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px 0;
`;

interface Props {
    fakeProp: string;
}

const MoodWidget: NextPage<Props> = () => {
    return (
        <Layout>
            <Head>
                <title>Mario Višnjić | Mood</title>
            </Head>
            <TitleSection
                mainTitle="SERVERLESS EXPRESS REST API"
                backgroundImage=""
                backgroundPosition="top right"
            />

            <DisplayWrapper>
                <div>
                    Check it on{' '}
                    <a href="https://github.com/mariovisnjic/netlify-express-server">
                        GitHub
                    </a>
                </div>
            </DisplayWrapper>

            <PageInfoWidget position="top">
                <div>Serverless Express.JS with mongoose as Rest API</div>
                <br />
                <a href="/">
                    <img
                        src="../static/common/home.png"
                        alt="homeIcon"
                        style={{ height: '30px' }}
                    />
                </a>
                <a
                    href="https://github.com/mariovisnjic/netlify-express-server"
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
        </Layout>
    );
};

export default MoodWidget;
