import { Button, Group, Stepper } from '@mantine/core';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TotalsContext } from '../App';
import CSSContent from '../components/CSSContent';
import DatabaseContent from '../components/DatabaseContent';
import DevOpsContent from '../components/DevOpsContent';
import FrontendContent from '../components/FrontendContent';
import RuntimeContent from '../components/RuntimeContent';

const Questions = () => {
  const navigate = useNavigate();
  const totals = useContext(TotalsContext);
  const [active, setActive] = useState(0);
  const [frontendValues, setFrontendValues] = useState({});
  const [cssValues, setCssValues] = useState({});
  const [runtimeValues, setRuntimeValues] = useState({});
  const [databaseValues, setDatabaseValues] = useState({});
  const [devOpsValues, setDevOpsValues] = useState({});

  const nextStep = () => {
    setActive((current) => (current < 6 ? current + 1 : current));
    totals.setTotalScores(() => {
      return {
        frontend: frontendValues,
        css: cssValues,
        runtime: runtimeValues,
        database: databaseValues,
        devops: devOpsValues,
      };
    });
  };
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const submitResults = () => {
    navigate('/results');
    console.log('finished');
  };
  return (
    <>
      <Stepper
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        color="cyan"
        style={{ width: 'screen', margin: '3rem 5rem' }}
        styles={{
          stepProgress: { color: '#15aabf' },
        }}>
        <Stepper.Step
          label="Frontend"
          description=""
          allowStepSelect={active > 0}>
          <FrontendContent setFrontendValues={setFrontendValues} />
        </Stepper.Step>
        <Stepper.Step
          label="CSS Frameworks"
          description=""
          allowStepSelect={active > 1}>
          <CSSContent setCssValues={setCssValues} />
        </Stepper.Step>
        <Stepper.Step
          label="Runtime Environment"
          description=""
          allowStepSelect={active > 2}>
          <RuntimeContent setRuntimeValues={setRuntimeValues} />
        </Stepper.Step>
        <Stepper.Step
          label="Database"
          description=""
          allowStepSelect={active > 3}>
          <DatabaseContent setDatabaseValues={setDatabaseValues} />
        </Stepper.Step>
        <Stepper.Step
          label="DevOps"
          description=""
          allowStepSelect={active > 4}>
          <DevOpsContent setDevOpsValues={setDevOpsValues} />
        </Stepper.Step>
        <Stepper.Step
          label="Submit"
          description=""
          allowStepSelect={active > 5}>
          Ready to see your results?
        </Stepper.Step>
        <Stepper.Completed>Here is your suggested tech stack</Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl" style={{ marginBottom: '3rem' }}>
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        {active < 5 && (
          <Button color="cyan" onClick={nextStep}>
            Next step
          </Button>
        )}
        {active === 5 && (
          <Button color="cyan" onClick={submitResults}>
            Submit
          </Button>
        )}
      </Group>
    </>
  );
};

export default Questions;
