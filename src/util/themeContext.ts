import React from 'react';

export interface ThemeContextType {
    primaryColor: string;
    primaryColorRGB: string;
    secondaryColor: string;
    tertiaryColor: string;
    quaternaryColor: string;
    quaternaryColorRGB: string;
    quinaryColor: string;
}

export const ThemeContext = React.createContext({
    primaryColor: '#283d3b',
    primaryColorRGB: '40, 61, 59',
    secondaryColor: '#197278',
    tertiaryColor: '#edddd4',
    quaternaryColor: '#c44536',
    quaternaryColorRGB: '196, 69, 54',
    quinaryColor: '#772e25'
});
