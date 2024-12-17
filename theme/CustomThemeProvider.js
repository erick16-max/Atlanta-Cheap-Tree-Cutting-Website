"use client"
import React from 'react'
import { ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import { deepOrange, amber, grey, common } from '@mui/material/colors';
import CssBaseline from "@mui/material/CssBaseline";
import { DARK_MODE, LIGHT_MODE } from '@/constants/ThemeConstants';
import { AppContextProvider } from '@/context/AppContext';



const ColorModeContext = React.createContext();


export function CustomThemeProvider({children}) {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)')
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: dark)')
  
  const [mode, setMode] = React.useState(LIGHT_MODE);
  const [openDrawer, setOpenDrawer] = React.useState(false);


  const isExtraTablet = useMediaQuery("(max-width:1088px)");
  const isTablet = useMediaQuery("(max-width:900px)");
  const isMobile = useMediaQuery("(max-width:682px)");
  const isExtraMobile = useMediaQuery("(max-width:452px)");

  
  const toggleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  
    const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === LIGHT_MODE ? DARK_MODE : LIGHT_MODE,
        );
      },
    }),
    [],
  );

  const themeData = {
    colorMode,
    isExtraTablet,
    isTablet,
    isMobile,
    isExtraMobile,
    toggleOpenDrawer,
    openDrawer,
  }



    const getDesignTokens = (mode) => ({
        palette: {
          mode,
          ...(mode === LIGHT_MODE
            ? {
                // palette values for light mode
                primary:{
                  light: '#5f8e63',
                  main: '#326e36',
                  dark: '#1b5e20',
                },
                secondary: {
                  main: '#1c1e21'
                },
               background: {
                    default: '#ffffff',
                    paper: '#ffffff',
               },
               text: {
                primary: grey[800],
                secondary: grey[700],
                
              },
              success: {
                main: '#26c3a6',
              },
              divider: "#eeeeee"
              
              }
            : {
                // palette values for dark mode
                primary:{
                  light: '#51cfb8',
                  main: '#E10A12',
                  dark: '#1e9c85',
                },
                secondary: {
                  main: '#eeeeee'
                },
                background: {
                  default: '#1c1e21',
                  paper: '#1c1e21',
                },
                text: {
                  primary: grey[200],
                  secondary: grey[400],
                },
                success: {
                  main: '#26c3a6',
                },
                divider: '#242526'
               
              }),
        },
      });

    

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
      
  return (
    <AppContextProvider>
        <ColorModeContext.Provider value={themeData}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
      </ColorModeContext.Provider>
    </AppContextProvider>
  )
}

export default ColorModeContext