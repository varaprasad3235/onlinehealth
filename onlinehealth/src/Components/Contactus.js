import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  margin-top: 32px;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  min-height: 100vh;
`;

const ContactContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 400px;
  text-align: center;
  margin: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #0077b6;
  margin-bottom: 10px;
`;

const InfoItem = styled.p`
  color: #333;
  margin: 10px 0;
`;

const ContactMessage = styled.p`
  font-size: 18px;
  color: #444;
`;

function Contactus() {
  return (
    <PageContainer>
      <ContactContainer>
        <Title>Contact Us</Title>
        <p>We're here to help you with your health and nutrition needs. Contact us using the following information:</p>

        <InfoItem>
          <strong>Company Name:</strong> Online Health and Nutrition Consultation
        </InfoItem>
        <InfoItem>
          <strong>Phone:</strong> +91 9032963235
        </InfoItem>
        <InfoItem>
          <strong>Email:</strong> 2200090047@kluniversity.in
        </InfoItem>
        <InfoItem>
          <strong>Address:</strong> KL University, Vaddeswaram
        </InfoItem>
        <InfoItem>
          <strong>Business Hours:</strong> Morning: 9:00AM to Evening: 5:00PM
        </InfoItem>

        <ContactMessage>
          Whether you have questions, need advice, or want to schedule a consultation, don't hesitate to get in touch. We're here to assist you on your health and nutrition journey.
        </ContactMessage>
      </ContactContainer>

      <ContactContainer>
        <Title>About Us</Title>
        <p>About Us

Welcome to Online Health and Nutrition Consultation! We are dedicated to your well-being and committed to helping you achieve your health and nutrition goals. Our team of experienced and passionate nutritionists and health experts is here to guide you on your journey to a healthier and happier life.

Why Choose Us?

Expertise: Our team comprises certified nutritionists and healthcare professionals with years of experience in the field. We stay up-to-date with the latest research and nutritional trends to provide you with the best guidance.

Personalized Approach: We understand that every individual is unique. That's why we tailor our advice to your specific needs, ensuring that your health and nutritional plans are as unique as you are.

Convenience: Our online platform allows you to access our services from the comfort of your home. No more waiting rooms or commutes. We're just a click away, ready to assist you.

Supportive Community: Join our community of individuals committed to better health. Share your journey, gain support from others, and celebrate your successes together.

Empowering You: Our goal is to empower you with knowledge and guidance, so you can make informed decisions about your health and nutrition. We believe in education as the key to lasting change.</p>
      </ContactContainer>
    </PageContainer>
  );
}

export default Contactus;