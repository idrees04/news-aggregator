import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ProfileSettings from '../components/profile/ProfileSettings.js';

function ProfilePage() {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" align="center" gutterBottom>
        Profile Settings
      </Typography>
      <ProfileSettings />
    </Container>
  );
}

export default ProfilePage;
