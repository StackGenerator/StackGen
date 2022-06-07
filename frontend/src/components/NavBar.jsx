import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from '@mantine/core';

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  box-shadow: 0 1px 10px 0.2px rgba(0, 0, 0, 0.1);
`;
const Title = styled.div`
  margin: 0;
  padding: 0;
  font-size: 28px;
  font-weight: 500;
  color: #262626;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HomePage = () => {
  return (
    <>
      <StyledHeader height={70} p="xs">
        <Link to="/">
          <Title>StackGen</Title>
        </Link>
        <div>
          <Link to="/">Home</Link>
          <Link to="/questions">Questions</Link>
          <Link to="/results">Results</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </StyledHeader>
      <Wrapper></Wrapper>
    </>
  );
};

export default HomePage;
