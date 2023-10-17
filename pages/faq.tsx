import React, { useState } from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

const FAQs = () => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
        question: 'How can I place an order on PharmEasy?',
        answer: 'To place an order on PharmEasy, you can visit our website or mobile app. Search for the products you need, add them to your cart, and proceed to checkout. You can also upload your prescription for prescription medicines.'
      },
      {
        question: 'What is the delivery time for orders?',
        answer: 'The delivery time for orders may vary depending on your location. In general, you can expect your order to be delivered within 2-7 business days. We always strive to deliver your order as quickly as possible.'
      },
      {
        question: 'Is it safe to buy medicines online from PharmEasy?',
        answer: 'Yes, it is completely safe to buy medicines online from PharmEasy. We partner with trusted pharmacies and healthcare providers to ensure the authenticity and quality of the products we deliver.'
      },
      {
        question: 'How can I track my order?',
        answer: 'Once your order is dispatched, you will receive a tracking link via SMS or email. You can click on the link to track the status of your delivery in real-time.'
      },
      {
        question: 'What if I receive a damaged or incorrect product?',
        answer: 'If you receive a damaged or incorrect product, please notify us within 24 hours of receiving the order. We will arrange for a replacement at the earliest.'
      },
      {
        question: 'Can I return opened or used products?',
        answer: 'We do not accept returns for products that have been opened or used. This policy includes prescription medications as well.'
      },
      {
        question: 'What if I have a prescription for my medicines?',
        answer: 'If you have a prescription, you can upload it during the checkout process. Our team will verify the prescription before processing the order.'
      },
      {
        question: 'How can I contact PharmEasy customer support?',
        answer: 'You can contact our customer support team through the "Contact Us" section on our website or app. We are available to assist you with any queries or concerns.'
      },
      {
        question: 'What payment methods are accepted on PharmEasy?',
        answer: 'We accept a variety of payment methods, including credit/debit cards, net banking, digital wallets, and UPI. You can choose the option that is most convenient for you.'
      },
      {
        question: 'Is my personal information secure with PharmEasy?',
        answer: 'Yes, we take the security of your personal information very seriously. We use advanced encryption and security measures to protect your data.'
      },
  ];

  return (
    <Container maxWidth="md" sx={{ textAlign: 'left', my: 4 }}>
      <Typography variant="h2" component="div" gutterBottom color="primary">
        Frequently Asked Questions (FAQs)
      </Typography>

      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{ border: '1px solid #e0e0e0', marginBottom: '8px', borderRadius: '8px' }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <Typography variant="subtitle1">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQs;
