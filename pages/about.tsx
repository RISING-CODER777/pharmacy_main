import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', my: 4 }}>
      <Typography variant="h2" component="div" gutterBottom color="primary">
        Welcome to India’s Leading Digital Healthcare Platform
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        We Focus on Simplifying Healthcare & Impacting Lives!
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6}>
          <Card>
            <img src="/image_1.jpg" alt="Image 1" style={{ width: '100%' }} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <img src="/image_2.jpg" alt="Image 2" style={{ width: '100%' }} />
          </Card>
        </Grid>
      </Grid>

      <Typography variant="body1" paragraph>
        PharmEasy offers over 1 lakh medicines and health products across various categories through its retail partners spread across the country. You can simply place an order on our website/app and we will deliver your online medicine order in as low as 4 hours, with a guaranteed delivery to you in 24-48 hours!
      </Typography>

      <Typography variant="h4" gutterBottom color="primary">
        What is PharmEasy?
      </Typography>
      <Typography variant="body1" paragraph>
        PharmEasy is a consumer healthcare “super app” that provides consumers with on-demand, home delivered access to a wide range of prescription, OTC pharmaceutical, other consumer healthcare products, comprehensive diagnostic test services, and teleconsultations thereby serving their healthcare needs.
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom color="primary">Registered Users</Typography>
              <Typography variant="body1">25 Million (as of Jun 30, 2021)</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom color="primary">PharmEasy Orders</Typography>
              <Typography variant="body1">8.8 Million (FY21)</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom color="primary">Transacting Customers</Typography>
              <Typography variant="body1">2.4 Million (FY21)</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h4" gutterBottom color="primary">
        Our Mission
      </Typography>
      <Typography variant="body1" paragraph>
        Our ultimate goal is to provide affordable healthcare to one and all.
      </Typography>

      <Typography variant="h4" gutterBottom color="primary">
        Core Values of PharmEasy
      </Typography>
      <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom color="primary">Customer Centricity</Typography>
              <Typography variant="body1">We put the customer at the center of everything we do.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom color="primary">Innovation</Typography>
              <Typography variant="body1">We constantly seek new and better ways to serve our customers.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom color="primary">Integrity</Typography>
              <Typography variant="body1">We uphold the highest standards of integrity in all our actions.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: '8px' }}>
        <Typography variant="h4" gutterBottom color="primary">
          Behind the Scenes
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={4}>
            <Card>
              <img src="/scence_1.jpg" alt="Behind the Scene 1" style={{ width: '100%' }} />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <img src="/scence_2.jpg" alt="Behind the Scene 2" style={{ width: '100%' }} />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <img src="/scence_3.jpg" alt="Behind the Scene 3" style={{ width: '100%' }} />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
