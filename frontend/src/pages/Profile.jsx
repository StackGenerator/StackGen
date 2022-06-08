import React, { useContext, useState, useEffect } from 'react';
import { TotalsContext } from '../App';
import { Accordion, Button } from '@mantine/core';
import styled from 'styled-components';

const sampleProjectList = [
  {
    projName: 'Notflix',
    techStack: {
      frontend: 'React',
      css: 'Bootstrap',
      runtime: 'Node',
      buildtool: 'Webpack',
      database: 'PostgreSQL',
      unit: 'Jest',
      e2e: 'Cypress',
    },
  },
  {
    projName: 'Shrimpify',
    techStack: {
      frontend: 'Svelte',
      css: 'Foundation',
      runtime: 'Deno',
      buildtool: 'Webpack',
      database: 'MongoDB',
      unit: 'Vitest',
      e2e: 'Cypress',
    },
  },
];

const Wrapper = styled.div`
  width: 70%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 10px 0.2px rgba(0, 0, 0, 0.1);

  /* position: absolute;
  left: 50%;
  top: 50%; */
  /* -webkit-transform: translate(-50%, -50%); */
  /* transform: translate(-50%, -50%); */
`;
const Container = styled.div`
  width: screen;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Heading = styled.p`
  font-size: 42px;
  font-weight: 500;
  color: #2e2e2e;
`;
const Category = styled.span`
  font-weight: 600;
  font-size: 18px;
`;

const Profile = () => {
  const totals = useContext(TotalsContext);
  const [projectsData, setProjectsData] = useState();

  useEffect(() => {
    fetch('/projects', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: totals.username }),
    })
      .then((res) => res.json())
      .then((data) => setProjectsData(data));
  }, [totals.username]);

  const handleDelete = (projName) => {
    // fetch('/projects', {
    //   method: 'DELETE',
    // });
  };

  const projects = sampleProjectList.map((el) => {
    return (
      <Accordion.Item label={el.projName}>
        <div>
          <Category>Frontend: </Category>
          {el.techStack.frontend}
        </div>
        <div>
          <Category>CSS Framework: </Category>
          {el.techStack.css}
        </div>
        <div>
          <Category>JS Runtime: </Category>
          {el.techStack.runtime}
        </div>
        <div>
          <Category>Build Tool: </Category>
          {el.techStack.buildtool}
        </div>
        <div>
          <Category>Database: </Category>
          {el.techStack.database}
        </div>
        <div>
          <Category>Unit Testing: </Category>
          {el.techStack.unit}
        </div>
        <div>
          <Category>E2E Testing: </Category>
          {el.techStack.e2e}
        </div>
        <Button
          color="red"
          radius="md"
          style={{ marginTop: '0.5rem' }}
          onClick={() => handleDelete(el.projName)}>
          Delete
        </Button>
      </Accordion.Item>
    );
  });

  return (
    <Container>
      <Heading>Saved Projects</Heading>
      <Wrapper>
        <Accordion>{projects}</Accordion>
      </Wrapper>
    </Container>
  );
};

export default Profile;
