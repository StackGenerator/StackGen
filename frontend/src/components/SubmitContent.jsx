import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  width: screen;
  justify-content: center;
  align-items: center;
  color: #434343;
`;

const SubmitContent = () => {
  return (
    <Wrapper>
      <h1>Thank you for your answers!</h1>
      <h3>Press Submit to see your results</h3>
    </Wrapper>
  );
};

export default SubmitContent;
