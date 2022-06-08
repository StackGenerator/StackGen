import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TotalsContext } from '../App';

import { Header, Anchor } from '@mantine/core';

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  box-shadow: 0 1px 10px 0.2px rgba(0, 0, 0, 0.1);
  background-color: #0c8599;
`;
const Title = styled.div`
  margin: 0;
  padding: 0;
  font-size: 26px;
  font-weight: 500;
  color: white;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HomePage = () => {
  const totals = useContext(TotalsContext);

  const handleLogout = () => {
    fetch('/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: totals.username }),
    })
      .then((res) => res.json())
      .then((data) => totals.setIsLoggedIn(data.isLoggedIn))
      .then(() => totals.setCurrentUser(null));
  };

  return (
    <>
      <StyledHeader height={70} p="xs">
        <Link to="/">
          <Title>StackGen</Title>
        </Link>
        <div>
          {/* <Anchor component={Link} to="/questions" style={{ color: 'white' }}>
            Questions
          </Anchor> */}
          {/* <Anchor component={Link} to="/results" style={{ color: 'white' }}>
            Results
          </Anchor> */}
          {!totals.isLoggedIn && (
            <Anchor component={Link} to="/login" style={{ color: 'white' }}>
              Login
            </Anchor>
          )}
          {totals.isLoggedIn && (
            <Anchor component={Link} to="/profile" style={{ color: 'white' }}>
              Profile
            </Anchor>
          )}
          {totals.isLoggedIn && (
            <a href="/" onClick={handleLogout} style={{ color: 'white' }}>
              Log Out
            </a>
          )}
        </div>
      </StyledHeader>
      <Wrapper></Wrapper>
    </>
  );
};

export default HomePage;
