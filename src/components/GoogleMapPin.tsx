import styled from '@emotion/styled';
import React from 'react';

const Pin = styled.div`
    width: 30px;
    height: 30px;
    position: relative;
    left: -10px;
    top: -25px;

    img {
        width: 100%;
    }
`;

interface PinProps {
    text?: string;
    lat: number;
    lng: number;
}

const GoogleMapPin: React.FC<PinProps> = ({ text }: PinProps): JSX.Element => (
    <Pin>
        <img src="../static/pin.png" alt={text} />
    </Pin>
);

export default GoogleMapPin;
