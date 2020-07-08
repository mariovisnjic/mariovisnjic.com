import { NextPage } from 'next';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import PageInfoWidget from '../components/PageInfoWidget';
import TitleSection from '../components/TitleSection';

interface Props {
    fakeProp: string;
}

const Home: NextPage<Props> = () => {
    const [showSection, setShowSection] = useState(0);

    return (
        <Layout>
            <TitleSection mainTitle="CHROME NOTES EXTENSION" />

            <div onMouseEnter={() => setShowSection(1)}>Step 1</div>

            <div onMouseEnter={() => setShowSection(2)}>Step 2</div>

            <div onMouseEnter={() => setShowSection(3)}>Step 3</div>

            <div onMouseEnter={() => setShowSection(4)}>Step 4</div>

            {showSection === 1 && (
                <img src="https://i.pinimg.com/originals/fc/ca/fa/fccafa6ce178ac8c1499abff6483a131.gif" />
            )}

            {showSection === 2 && (
                <img src="https://media2.giphy.com/media/u00BUvSb3L5cIQHhjw/giphy.gif" />
            )}

            {showSection === 3 && (
                <img src="https://thumbs.gfycat.com/HealthyFrenchGhostshrimp-size_restricted.gif" />
            )}

            {showSection === 4 && (
                <img src="https://media3.giphy.com/media/d1E1szXDsHUs3WvK/giphy.gif" />
            )}

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
        </Layout>
    );
};

export default Home;
