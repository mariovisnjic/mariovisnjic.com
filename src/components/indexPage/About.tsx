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
    background: red;
    height: 150px;
    position: relative;
    top: ${(props: BlockProps) => (props.didMount ? '0px' : '-30px')};
    opacity: ${(props: BlockProps) => (props.didMount ? '1' : '0')};
    transition: opacity 0.5s, top 1s;
`;

const Block2 = styled.div`
    background: white;
    height: 250px;
    position: relative;
    left: ${(props: BlockProps) => (props.didMount ? '0px' : '-30px')};
    opacity: ${(props: BlockProps) => (props.didMount ? '1' : '0')};
    transition: opacity 0.5s, left 1s;
`;

const Block3 = styled.div`
    background: blue;
    height: 350px;
    position: relative;
    right: ${(props: BlockProps) => (props.didMount ? '0px' : '-30px')};
    opacity: ${(props: BlockProps) => (props.didMount ? '1' : '0')};
    transition: opacity 0.5s, right 1s;
`;

const Block4 = styled.div`
    background: yellow;
    height: 50px;
    position: relative;
    bottom: ${(props: BlockProps) => (props.didMount ? '0px' : '-30px')};
    opacity: ${(props: BlockProps) => (props.didMount ? '1' : '0')};
    transition: opacity 0.5s, bottom 1s;
`;

interface Props {
    fakeProp?: string;
}

interface BlockProps {
    theme: ThemeContextType;
    didMount: boolean;
}

const About: React.FC<Props> = (props: Props): JSX.Element => {
    const [didMount, setDidMount] = useState(false);
    const theme: ThemeContextType = useContext(ThemeContext);
    const blockProps = { didMount, theme };

    useEffect(() => {
        setTimeout(() => setDidMount(true), 200);
    }, []);

    const location = {
        address: 'Rijeka, Croatia',
        lat: 45.342828,
        lng: 14.38949
    };

    return (
        <FlexContainer>
            <FlexColumn>
                <Block1 {...blockProps}>Mario Višnjić</Block1>
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
