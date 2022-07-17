import React, { useState } from 'react';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

interface ThemeInterface {
    colors: any,
    typography: any,
    toggleTheme: () => void,
    isLightTheme: boolean
}

export const ThemeContext = React.createContext<ThemeInterface | null>(null);

const ThemeProvider = ({ children }: any) => {
    
const [isLightTheme, setLightTheme] = useState<boolean>(true);
const toggleTheme = () => setLightTheme(previousState => !previousState);


    const theme: ThemeInterface = {
        colors: isLightTheme ? colors.light : colors.dark,
        typography,
        toggleTheme,
        isLightTheme,
    };

    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;