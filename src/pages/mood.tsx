import axios from 'axios';
import { NextPage } from 'next';
import getConfig from 'next/config';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import Layout from '../components/Layout';
import PageInfoWidget from '../components/PageInfoWidget';
import TitleSection from '../components/TitleSection';
import netlifyAuth from '../netlifyAuth.js';
import { ThemeContext, ThemeContextType } from '../util/themeContext';
const { publicRuntimeConfig } = getConfig();

interface Props {
    fakeProp: string;
}

const Mood: NextPage<Props> = () => {
    const [lastMood, setLastMood] = useState();
    const [physical, setPhysical] = useState(0);
    const [emotional, setEmotional] = useState(0);
    const [focus, setFocus] = useState(0);

    const [password, setPassword] = useState('');
    const [saveMoodResponse, setSaveMoodResponse] = useState();
    const [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)
    const [user, setUser] = useState(null)

    useEffect(() => {
        netlifyAuth.initialize((user) => {
            setLoggedIn(!!user)
        })
    }, [loggedIn])

    useEffect(() => {
        async function fetchApiKey() {
            axios
                .get(publicRuntimeConfig.API_URL + '/mood')
                .then((response) => setLastMood(response.data));
        }
        fetchApiKey();
    }, []);

    const saveMood = () => {
        axios
            .post(publicRuntimeConfig.API_URL + '/mood/insert', {
                physical: physical,
                emotional: emotional,
                focus: focus,
                day: new Date().getDay(),
                hour: new Date().getHours(),
                fullDate: new Date(),
                password: password
            })
            .then((response) => setSaveMoodResponse(response.data));
    };

    const login = () => {
        netlifyAuth.authenticate((user) => {
            setLoggedIn(!!user)
            setUser(user)
            netlifyAuth.closeModal()
        })
    }

    return (
        <Layout>
            <Head>
                <title>Mario Višnjić | Chrome notes extension</title>
            </Head>
            <TitleSection
                mainTitle="MOOD"
                backgroundImage="../static/chromeNotesExtension/title.png"
                backgroundPosition="top right"
            />

            <div>{JSON.stringify(lastMood)}</div>

            <div>
                phy:{' '}
                <input onChange={(e) => setPhysical(Number(e.target.value))} />
                em:{' '}
                <input onChange={(e) => setEmotional(Number(e.target.value))} />
                foc:{' '}
                <input onChange={(e) => setFocus(Number(e.target.value))} />
                pass: <input onChange={(e) => setPassword(e.target.value)} />
                <button onClick={() => saveMood()}>Spremi</button>
                {JSON.stringify(saveMoodResponse)}
            </div>

            {loggedIn ? (
                <div>
                    You are logged in!
                </div>
            ) : (
                <button onClick={login}>
                    Log in here.
                </button>
            )}

            <PageInfoWidget position="top">
                <div>Mongoose, express, next</div>
                <br />
                <a href="/">
                    <img
                        src="../static/common/home.png"
                        alt="homeIcon"
                        style={{ height: '30px' }}
                    />
                </a>
                <a
                    href="https://github.com/mariovisnjic/mariovisnjic.com"
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

export default Mood;
