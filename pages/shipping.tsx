import React from 'react';
import { Container, Typography } from '@mui/material';

const ShippingAndReturnPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'left', my: 4 }}>
      <Typography variant="h2" component="div" gutterBottom color="primary" sx={{ borderBottom: '2px solid #3182ce', paddingBottom: '10px' }}>
        Shipping Policy
      </Typography>

      <div>
        <Typography variant="body1" paragraph>
          <strong>Delivery Areas:</strong> We currently deliver to select areas across the country. You can check if we deliver to your location by entering your pin code on the checkout page.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Delivery Time:</strong> You can expect your order to be delivered within 2-7 business days from the date of order placement. Please note that delivery times might vary based on your location.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Prescription Verification:</strong> For prescription medications, our team will verify the prescription provided before processing the order. In case of any discrepancies, our team will reach out to you for clarification.
        </Typography>
      </div>

      <Typography variant="h2" component="div" gutterBottom color="primary" sx={{ borderBottom: '2px solid #3182ce', paddingBottom: '10px' }}>
        Return Policy
      </Typography>

      <div>
        <Typography variant="body1" paragraph>
          <strong>Damaged or Incorrect Products:</strong> If you receive a damaged or incorrect product, please notify us within 24 hours of receiving the order. We will arrange for a replacement at the earliest.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Opened or Used Products:</strong> We do not accept returns for products that have been opened or used. This includes prescription medications.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Condition of the Product:</strong> Please ensure that the product is in its original condition and packaging. We reserve the right to refuse a return if we believe the condition of the product is not suitable for resale.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Prescription Medications:</strong> Returns for prescription medications are only accepted if the product received is incorrect.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Refunds:</strong> In case a return is accepted, we will process the refund to the original mode of payment within 7-10 business days.
        </Typography>
      </div>
    </Container>
  );
};

export default ShippingAndReturnPolicy;
