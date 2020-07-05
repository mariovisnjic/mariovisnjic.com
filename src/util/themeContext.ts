import React from 'react';

export interface ThemeContextType {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    quaternaryColor: string;
    quinaryColor: string;
}

export const ThemeContext = React.createContext({
    primaryColor: '#283d3b',
    secondaryColor: '#197278',
    tertiaryColor: '#edddd4',
    quaternaryColor: '#c44536',
    quinaryColor: '#772e25'
});
