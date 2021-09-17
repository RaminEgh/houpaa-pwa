import React from 'react';
import {Box, FormControl, Stack, TextField} from "@mui/material";
import SymbolLogo from '../assets/symbol.png';
const Login = () => {
    const style = {
        header: {
            position: 'relative',
            bgcolor: 'common.bgbrand',
            height: 320,
            '& img': {
                position: 'absolute',
                left: 48,
                zIndex: 99,
                bottom: 68,
            },
            '& .curve': {
                clipPath: 'ellipse(118% 128% at 73% 152%)',
                bgcolor: 'background.default',
                height: 230,
                position: 'absolute',
                bottom: -92,
                left: -9,
                transform: 'rotate(11deg)',
                width: '110%',
                zIndex: 98
            },
        },
        body: {
            zIndex: 99
        }

    }
    return (
        <Stack spacing={2}>
            <Box sx={style.header}>
                <img alt='houpaa' src={SymbolLogo}/>
                <Box className='curve'/>
            </Box>
            <Stack sx={style.body}>
                <h3>با این شماره قبلا ثبت نام کردی!</h3>
                <h6>برای وارد شدن نام کاربری و رمز عبورت را بنویس.</h6>
                <TextField
                    type='password'
                    label='نام کاربریت رو اینجا بنویس'
                />
            </Stack>
        </Stack>
    );
};

export default Login;