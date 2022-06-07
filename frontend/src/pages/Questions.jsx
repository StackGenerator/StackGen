import React from 'react';
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import FrontendContent from '../components/FrontendContent';

const Questions = () => {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        style={{ width: 'screen', margin: '3rem' }}>
        <Stepper.Step
          label="Frontend"
          description="Choosing a Framework"
          allowStepSelect={active > 0}>
          <FrontendContent />
        </Stepper.Step>
        <Stepper.Step
          label="Second step"
          description="Verify email"
          allowStepSelect={active > 1}>
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step
          label="Final step"
          description="Get full access"
          allowStepSelect={active > 2}>
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Step
          label="Final step"
          description="Get full access"
          allowStepSelect={active > 3}>
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Step
          label="Final step"
          description="Get full access"
          allowStepSelect={active > 4}>
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl" style={{ marginBottom: '3rem' }}>
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button color="cyan" onClick={nextStep}>
          Next step
        </Button>
      </Group>
    </>
  );
};

export default Questions;
