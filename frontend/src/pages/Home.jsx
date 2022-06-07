import React from 'react';
import { Button } from '@mantine/core';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import { Title } from '@mantine/core';
import illustration from '../assets/illustration.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin: 10rem 0;
  text-align: end;
`;
const Hero = styled.div`
  display: flex;
  margin: 3rem 4rem;
`;
const HeroImage = styled.img`
  width: 50%;
`;
const Title = styled.p`
  font-size: 46px;
  font-weight: 700;
  line-height: 46px;
`;
const Gradient = styled.span`
  background: linear-gradient(-70deg, #73ffbb 0%, #64acff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/questions');
  };
  return (
    <>
      <Hero>
        <Wrapper>
          {/* <Title order={1} style={{ fontSize: 42 }}> */}
          <Title>
            What's the best <Gradient>tech stack</Gradient> for your
            application?
          </Title>
          <p style={{ marginLeft: '160px' }}>
            Answer some questions so that we can offer recommendations that best
            suit the needs of your application
          </p>
          <Button color="cyan" radius="md" size="md" onClick={handleNavigate}>
            Start Questionnaire
          </Button>
        </Wrapper>
        <HeroImage src={illustration} alt="web illustration" />
      </Hero>
      <a
        href="https://storyset.com/web"
        style={{
          fontSize: '0.75rem',
          display: 'block',
          width: '100%',
          textAlign: 'center',
          margin: '0',
          padding: '0',
        }}>
        Web illustrations by Storyset
      </a>
    </>
  );
};

export default Home;
