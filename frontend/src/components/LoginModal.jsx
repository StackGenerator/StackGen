import React, { useState, useContext } from 'react';
import { Input, InputWrapper, PasswordInput, Button } from '@mantine/core';
import styled from 'styled-components';
import { TotalsContext } from '../App';

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 1.5rem;
  gap: 0.5rem;
`;

const LoginModal = () => {
  const totals = useContext(TotalsContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    fetch('/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((res) => res.json())
      .then((data) => totals.setIsLoggedIn(data.isLoggedIn))
      .then(() => totals.setCurrentUser(username));
  };

  const handleSignup = () => {
    fetch('/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((res) => res.json())
      .then((data) => totals.setIsLoggedIn(data.isLoggedIn))
      .then(() => totals.setCurrentUser(username));
  };

  return (
    <>
      <InputWrapper
        id="input-demo"
        required
        label="Username"
        style={{ margin: '0', padding: '0' }}>
        <Input
          id="input-demo"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <PasswordInput
          placeholder="Password"
          label="Password"
          required
          style={{ marginTop: '1rem' }}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputWrapper>

      <BtnWrapper>
        <Button color="cyan" radius="md" size="md" onClick={handleLogin}>
          Login
        </Button>
        <Button
          variant="subtle"
          color="cyan"
          radius="md"
          onClick={handleSignup}>
          Sign Up
        </Button>
      </BtnWrapper>
    </>
  );
};

export default LoginModal;
