import styled from '@emotion/styled';
import React, { useContext, useEffect, useState } from 'react';

import { ThemeContext, ThemeContextType } from '../../util/themeContext';
import GoogleMap from '../GoogleMap';

const FlexContainer = styled.div`
    display: flex;

    @media all and (max-width: 640px) {
        flex-direction: column;
    }
`;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex: 50%;

    @media all and (max-width: 640px) {
        flex: 100%;
    }
`;

const Block1 = styled.div`
    background: linear-gradient(
            0deg,
            rgba(${(props: BlockProps) => props.theme.primaryColorRGB}, 0.8),
            rgba(${(props: BlockProps) => props.theme.primaryColorRGB}, 0.8)
        ),
        url('../static/indexPage/code.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 250px;
    color: white;
    font-size: 22px;
    position: relative;
    text-align: left;
    padding: 30px;
    top: ${(props: BlockProps) => (props.didMount ? '0px' : '-30px')};
    opacity: ${(props: BlockProps) => (props.didMount ? '1' : '0')};
    transition: opacity 0.5s, top 1s;

    p {
        font-size: 16px;
        margin: 15px 0;
    }

    img {
        height: 20px;
        top: 4px;
        position: relative;
        filter: brightness(0) invert(1);
    }
`;

const Block2 = styled.div`
    background: white;
    min-height: 150px;
    position: relative;
    left: ${(props: BlockProps) => (props.didMount ? '0px' : '-30px')};
    opacity: ${(props: BlockProps) => (props.didMount ? '1' : '0')};
    transition: opacity 0.5s, left 1s;
`;

const Block3 = styled.div`
    background: blue;
    min-height: 350px;
    position: relative;
    right: ${(props: BlockProps) => (props.didMount ? '0px' : '-30px')};
    opacity: ${(props: BlockProps) => (props.didMount ? '1' : '0')};
    transition: opacity 0.5s, right 1s;
`;

const Block4 = styled.div`
    background: yellow;
    min-height: 50px;
    position: relative;
    bottom: ${(props: BlockProps) => (props.didMount ? '0px' : '-30px')};
    opacity: ${(props: BlockProps) => (props.didMount ? '1' : '0')};
    transition: opacity 0.5s, bottom 1s;
`;

interface BlockProps {
    theme: ThemeContextType;
    didMount: boolean;
}

const About: React.FC = (): JSX.Element => {
    const [didMount, setDidMount] = useState(false);
    const theme: ThemeContextType = useContext(ThemeContext);
    const blockProps = { didMount, theme };

    useEffect(() => {
        setTimeout(() => setDidMount(true), 200);
    }, []);

    const location = {
        address: 'Rijeka, Croatia',
        lat: 45.327061,
        lng: 14.441307
    };

    return (
        <FlexContainer>
            <FlexColumn>
                <Block1 {...blockProps}>
                    Mario Višnjić
                    <p>
                        <img src="../static/icons/heart.png" alt="" />
                        &nbsp;&nbsp;I like building small standalone apps
                    </p>
                    <p>
                        <img src="../static/icons/pin.png" alt="" />
                        &nbsp;Rijeka, Croatia
                    </p>
                    <p>
                        <img src="../static/icons/briefcase.png" alt="" />
                        &nbsp;3+ years of professional experience
                    </p>
                    <p>
                        <img src="../static/icons/stack.png" alt="" />
                        &nbsp;Preferred stack: React, Typescript, Node, MongoDB
                    </p>
                    <p>
                        <img src="../static/icons/plus.png" alt="" />
                        &nbsp;Can work with: Vue, PHP, Angular, Wordpress themes
                        and plugins
                    </p>
                </Block1>
                <Block2 {...blockProps}>Hobbies or something</Block2>
            </FlexColumn>
            <FlexColumn>
                <Block3 {...blockProps}>
                    <GoogleMap location={location} zoomLevel={6} />
                </Block3>
                <Block4 {...blockProps}>Blah</Block4>
            </FlexColumn>
        </FlexContainer>
    );
};

export default About;
