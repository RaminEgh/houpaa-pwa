import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';


const theme = createTheme({
    direction: 'rtl',
    palette: {
        mode: 'light',
        common: {
            brand: '#FFD200',
            bgbrand: '#FFB21A',
        },
        primary: {
            main: '#80E8D0',
        },
        secondary: {
            main: grey[100],
        },

        text: {
            primary: '#262626'
        },
        background: {
            paper: '#C4C4C4',
            default: '#F4F4F4'
        }
    },
});

export default theme;