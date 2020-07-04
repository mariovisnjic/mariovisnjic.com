import { NextPage } from 'next';
import React from 'react';

import PageInfoWidget from '../components/PageInfoWidget';

interface Props {
    fakeProp: string;
}

const Home: NextPage<Props> = () => {
    return (
        <div>
            <h1>mariovisnjic.com</h1>

            <PageInfoWidget position="top">
                <div>
                    This page is made and statically generated with Next.js.
                    Hosted on Netlify
                </div>
                <br />
                <a href="https://mariovisnjic.com">
                    <img src="../static/home.png" style={{ height: '30px' }} />
                </a>
                <a
                    href="https://github.com/mariovisnjic/mariovisnjic.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="../static/GitHub-Logo.png"
                        style={{ height: '30px', marginLeft: '10px' }}
                    />
                </a>
            </PageInfoWidget>
        </div>
    );
};

export default Home;
