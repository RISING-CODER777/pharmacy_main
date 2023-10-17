import React from 'react';
import { Container, Typography, Card, CardContent, Box } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'left', my: 4 }}>
      <Typography variant="h2" component="div" gutterBottom color="primary">
        Terms and Conditions
      </Typography>

      <Card sx={{ my: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom color="primary">
            1. Introduction
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to PharmEasy's Terms and Conditions. These terms and conditions apply to the use of this website and by accessing this website and/or placing an order, you agree to be bound by the terms and conditions set out here. If you do not agree to be bound by these terms and conditions, you may not use or access this website.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ my: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom color="primary">
            2. Intellectual Property
          </Typography>
          <Typography variant="body1" paragraph>
            The content of this website is protected by copyright, trademarks, and other intellectual property rights. You may not reproduce, modify, copy, or distribute or use for commercial purposes any of the materials or content on this website without written permission from PharmEasy.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ my: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom color="primary">
            3. Medical Disclaimer
          </Typography>
          <Typography variant="body1" paragraph>
            The information provided on this website is for general informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ my: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom color="primary">
            4. Limitations of Liability
          </Typography>
          <Typography variant="body1" paragraph>
            PharmEasy will not be liable for any damages, direct or indirect, arising out of or in connection with the use of this website. This includes, but is not limited to, any loss of business, loss of profits, loss of revenue, loss of data, or any other indirect or consequential loss.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ my: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom color="primary">
            5. Applicable Law
          </Typography>
          <Typography variant="body1" paragraph>
            These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </Typography>
        </CardContent>
      </Card>

    </Container>
  );
};

export default TermsAndConditions;
