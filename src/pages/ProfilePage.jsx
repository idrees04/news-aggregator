import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProfileSettings from '../components/profile/ProfileSettings';

function ProfilePage() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Profile Settings
        </Typography>
        <ProfileSettings />
      </Box>
    </Container>
  );
}

export default ProfilePage;
