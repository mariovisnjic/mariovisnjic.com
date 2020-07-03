import styled from '@emotion/styled';
import React from 'react';

const TextStyle = styled.div`
    color: black;
`;

interface Props {
    text: string;
}

const BasicText = (props: Props): JSX.Element => {
    return <TextStyle>{props.text}</TextStyle>;
};

export default BasicText;
