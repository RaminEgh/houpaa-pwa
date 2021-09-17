import React from 'react';
import {Container, ThemeProvider} from "@mui/material";
import theme from "../Theme/theme";

const Main = ({children}) => {
    const style = {
        p: '0 !important',
        overflowX: 'hidden',
        bgcolor: 'background.default',
        height: '100vh',
    }
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md" sx={style}>
                {children}
            </Container>
        </ThemeProvider>
    );
};

export default Main;