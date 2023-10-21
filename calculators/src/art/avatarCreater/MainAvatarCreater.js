import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function AvatarCreator() {
    const [initials, setInitials] = useState('');
    const [avatarSrc, setAvatarSrc] = useState('');

    const handleInitialsChange = (e) => {
        setInitials(e.target.value);
    };

    const createAvatar = () => {
        // You can customize the avatar color, background, and size as per your requirements
        const avatar = (
            <Avatar style={{ backgroundColor: '#3f51b5', width: 100, height: 100 }}>
                {initials}
            </Avatar>
        );
        setAvatarSrc(avatar);
    };

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item>
                    <TextField
                        label="Enter Initials"
                        variant="outlined"
                        value={initials}
                        onChange={handleInitialsChange}
                    />
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={createAvatar}>
                        Create Avatar
                    </Button>
                </Grid>
            </Grid>
            <div style={{ marginTop: '20px' }}>{avatarSrc}</div>
        </div>
    );
}

export default AvatarCreator;
