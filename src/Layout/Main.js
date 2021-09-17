import React from 'react';
import {Container} from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../Theme/theme";
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
});


const Main = ({children}) => {
    const style = {
        p: '0 !important',
        overflowX: 'hidden',
        bgcolor: 'background.default',
        height: '100vh',
    }
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <Container maxWidth="md" sx={style}>
                    {children}
                </Container>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default Main;