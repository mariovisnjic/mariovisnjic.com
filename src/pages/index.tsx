import { NextPage } from 'next';
import React from 'react';

interface Props {
    fakeProp: string;
}

const Home: NextPage<Props> = (props: Props) => {
    return (
        <div>
            <h1>mariovisnjic.com</h1>
            <p>//todo</p>
        </div>
    );
};

export default Home;
