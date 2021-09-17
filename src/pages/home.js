import React, {useEffect, useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
const Home = () => {

    const [data, setData] = useState([]);
    const [mode, setMode] = useState('online');
    useEffect(() => {
        const url = 'https://reqres.in/api/users';
        fetch(url).then((response) => {
            response.json().then((result) => {
                console.warn(result)
                setData(result.data)
                localStorage.setItem('users', JSON.stringify(result))
            })
        }).catch(error => {
            setMode('offline')
            const collection = JSON.parse(localStorage.getItem('users'))
            setData(collection.data);
        })
    }, [])


    return (
        <>
            {
                mode === 'offline' ? <strong>You are in offline mode</strong> : null
            }
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {
                    data.map(item => {
                        return <React.Fragment key={item.id}>
                            <ListItem alignItems="flex-start" button>
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={item.avatar} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {`${item.first_name} ${item.last_name}`}
                                            </Typography>
                                            {" — I'll be in your neighborhood doing errands this…"}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </React.Fragment>
                    })
                }

            </List>
        </>
    );
};

export default Home;