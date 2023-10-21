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

    const GenerateAvatar = () => {
        // You can customize the avatar color, background, and size as per your requirements
        const avatar = (
            <Avatar style={{ backgroundColor: '#3f51b5', width: 200, height: 200 }}>
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
                        label="Enter your Initials"
                        variant="outlined"
                        value={initials}
                        onChange={handleInitialsChange}
                    />
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={GenerateAvatar}>
                        Generate Avatar
                    </Button>
                </Grid>
            </Grid>
            <div style={{ marginTop: '40px' }}>{avatarSrc}</div>
        </div>
    );
}

export default AvatarCreator;
