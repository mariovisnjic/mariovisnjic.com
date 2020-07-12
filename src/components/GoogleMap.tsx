import styled from '@emotion/styled';
import GoogleMapReact from 'google-map-react';
import getConfig from 'next/config';
import React from 'react';

import GoogleMapPin from './GoogleMapPin';

const { publicRuntimeConfig } = getConfig();

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
}

const GoogleMap: React.FC<GoogleMapProps> = ({
    location,
    zoomLevel
}: GoogleMapProps): JSX.Element => {
    return (
        <Map>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: publicRuntimeConfig.GOOGLE_MAPS_API_KEY
                }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                <GoogleMapPin lng={location.lng} lat={location.lat} />
            </GoogleMapReact>
        </Map>
    );
};

export default GoogleMap;
