import React, { useContext, useState, useEffect } from 'react';
import { TotalsContext } from '../App';
import styled from 'styled-components';
import { Button, Modal, TextInput } from '@mantine/core';
import LoginModal from '../components/LoginModal';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: screen;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  color: #676767;
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.4rem 0;
  padding: 0.4rem 2rem;
  font-weight: 500;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 1px 10px 0.2px rgba(0, 0, 0, 0.1);
`;

const TechName = styled.span`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(-70deg, #0066ff 0%, #ea52f8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Results = () => {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const [projectName, setProjectName] = useState('');
  const totals = useContext(TotalsContext);

  const [results, setResults] = useState({
    frontend: '',
    css: '',
    runtime: '',
    database: '',
    unit: '',
    end: '',
  });

  const computeFrontend = (frontendScores) => {
    // takes in total.totalScores.frontend
    const options = {
      react: 0,
      angular: 0,
      svelte: 0,
      vue: 0,
    };

    // iterate through keys in frontend incrementing scores
    for (let key of Object.keys(frontendScores)) {
      for (let value of frontendScores[key]) {
        options[value]++;
      }
    }

    let choice = '';
    let max = 0;
    Object.keys(options).forEach((key) => {
      if (options[key] > max) {
        max = options[key];
        choice = key;
      }
    });

    setResults((prevState) => {
      return { ...prevState, frontend: choice };
    });
  };

  const computeRuntime = (runtimeScores) => {
    const options = {
      node: 0,
      deno: 0,
    };

    for (let key of Object.keys(runtimeScores)) {
      for (let value of runtimeScores[key]) {
        options[value]++;
      }
    }

    let choice = '';
    let max = 0;
    Object.keys(options).forEach((key) => {
      if (options[key] > max) {
        max = options[key];
        choice = key;
      }
    });

    setResults((prevState) => {
      return { ...prevState, runtime: choice };
    });
  };

  const setCSS = (cssScores) => {
    if (cssScores[1][0] === 'yes') {
      setResults((prevState) => {
        return { ...prevState, css: cssScores[2][0] };
      });
    }
  };

  const setDatabase = (databaseScores) => {
    const options = ['mongodb', 'sqlite', 'mysql', 'postgresql'];
    Object.keys(databaseScores).forEach((key) => {
      if (options.includes(databaseScores[key][0]))
        setResults((prevState) => {
          return { ...prevState, database: databaseScores[key][0] };
        });
    });
  };

  const setUnit = (unitScores) => {
    const options = ['jest', 'mocha'];
    Object.keys(unitScores).forEach((key) => {
      if (options.includes(unitScores[key][0]))
        setResults((prevState) => {
          return { ...prevState, unit: unitScores[key][0] };
        });
    });
  };

  const setEnd = (endScores) => {
    const options = ['selenium', 'cypress', 'playwright'];
    Object.keys(endScores).forEach((key) => {
      if (options.includes(endScores[key][0]))
        setResults((prevState) => {
          return { ...prevState, end: endScores[key][0] };
        });
    });
  };

  useEffect(() => {
    computeFrontend(totals.totalScores.frontend);
    computeRuntime(totals.totalScores.runtime);
    setCSS(totals.totalScores.css);
    setDatabase(totals.totalScores.database);
    setUnit(totals.totalScores.devops);
    setEnd(totals.totalScores.devops);
  }, []);

  const handleSave = () => {
    fetch('/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: totals.currentUser,
        projName: projectName,
        techStack: {
          frontend: results.frontend,
          css: results.css,
          runtime: results.runtime,
          buildtool: 'webpack',
          database: results.database,
          unit: results.unit,
          e2e: results.end,
        },
      }),
    })
      .then((res) => res.json())
      .then(() => navigate('/profile'));
  };

  const handleTextChange = (e) => {
    setProjectName(e.target.value);
  };

  return (
    <Wrapper>
      <Heading>RESULTS</Heading>

      {totals.isLoggedIn && (
        <>
          <TextInput
            placeholder="Project Name"
            label="Save your project as:"
            radius="md"
            style={{ width: '500px' }}
            required
            onChange={handleTextChange}
          />
          <Button
            color="cyan"
            radius="md"
            size="md"
            style={{ marginTop: '1rem', marginBottom: '2rem' }}
            onClick={handleSave}>
            Save Your Results
          </Button>
        </>
      )}
      <ResultsContainer>
        Frontend Framework:
        <TechName>{results.frontend}</TechName>
      </ResultsContainer>
      <ResultsContainer>
        CSS Framework:
        <TechName>{results.css}</TechName>
      </ResultsContainer>
      <ResultsContainer>
        Buildtool:
        <TechName>webpack</TechName>
      </ResultsContainer>
      <ResultsContainer>
        Runtime Environment:
        <TechName>{results.runtime}</TechName>
      </ResultsContainer>
      <ResultsContainer>
        Database:
        <TechName>{results.database}</TechName>
      </ResultsContainer>
      <ResultsContainer>
        Unit Testing:
        <TechName>{results.unit}</TechName>
      </ResultsContainer>
      <ResultsContainer>
        E2E Testing:
        <TechName>{results.end}</TechName>
      </ResultsContainer>
      {!totals.isLoggedIn && (
        <Button
          color="cyan"
          radius="md"
          size="md"
          style={{ marginTop: '1rem', marginBottom: '4rem' }}
          onClick={() => setOpened(true)}>
          Login to Save
        </Button>
      )}

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Login to save your results!">
        <LoginModal setOpened={setOpened} />
      </Modal>
    </Wrapper>
  );
};

export default Results;
