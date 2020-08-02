import styled from '@emotion/styled';
import GoogleMapReact from 'google-map-react';
import React from 'react';

import GoogleMapPin from './GoogleMapPin';

const Map = styled.div`
    width: 100%;
    height: 400px;

    .pin {
        width: 30px;
        height: 30px;
        position: relative;
        left: -10px;
        top: -25px;
    }

    .pin img {
        width: 100%;
    }
`;

interface GoogleMapProps {
    location: {
        address: string;
        lat: number;
        lng: number;
    };
    zoomLevel: number;
    googleMapsKey: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
    location,
    zoomLevel,
    googleMapsKey
}: GoogleMapProps): JSX.Element => {
    return (
        <Map>
            <GoogleMapReact
                bootstrapURLKeys={{ key: googleMapsKey }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                <GoogleMapPin lng={location.lng} lat={location.lat} />
            </GoogleMapReact>
        </Map>
    );
};

export default GoogleMap;
