import React from 'react';

interface PinProps {
    text?: string;
    lat: number;
    lng: number;
}

const GoogleMapPin: React.FC<PinProps> = ({ text }: PinProps): JSX.Element => (
    <div className="pin">
        <img src="../static/pin.png" />
    </div>
);

export default GoogleMapPin;
