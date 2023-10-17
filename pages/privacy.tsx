import React from 'react';
import { Container, Typography } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'left', my: 4 }}>
      <Typography variant="h2" component="div" gutterBottom color="primary" sx={{ borderBottom: '2px solid #3182ce', paddingBottom: '10px' }}>
        Privacy Policy
      </Typography>

      <div>
        <Typography variant="body1" paragraph>
          At PharmEasy, we take your privacy seriously. This Privacy Policy outlines the types of personal information we collect, how it is used, and your choices regarding that information. By using our services, you consent to the practices described in this policy.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Information We Collect:</strong> We collect information such as your name, address, contact details, and prescription details to provide our services. We may also collect information about your device and usage patterns.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>How We Use Your Information:</strong> We use your information to process orders, provide customer support, improve our services, and send relevant communications. We do not sell or share your information with third parties for marketing purposes.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Security Measures:</strong> We employ industry-standard security measures to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Access and Control:</strong> You can access, correct, or delete your personal information at any time by contacting us. You can also opt-out of receiving non-essential communications.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Changes to this Policy:</strong> We may update this policy from time to time. We will notify you of any significant changes by posting an updated version on our website.
        </Typography>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
