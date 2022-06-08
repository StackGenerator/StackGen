import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2rem 30%;
  gap: 40px;
  z-index: -20;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const DevOpsContent = ({ setDevOpsValues }) => {
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  const handleChange = (e, num) => {
    if (num === 1 && e.target.value === 'yes') {
      setShow2(true);
      setShow3(true);
    }
    if (num === 1 && e.target.value === 'no') setShow2(false);
    if (num === 3 && e.target.value === 'yes') setShow4(true);
    if (num === 3 && e.target.value === 'no') setShow4(false);
    if (num === 4 && e.target.value === 'no') setShow5(true);

    let values = e.target.value.split(',');
    const newState = {
      [num]: values,
    };
    setDevOpsValues((prevState) => {
      return { ...prevState, ...newState };
    });
  };

  return (
    <Wrapper>
      <Form onChange={(e) => handleChange(e, 1)}>
        <legend>Are you going to be writing tests for this application?</legend>
        <div style={{ display: 'flex', marginTop: '0.5rem' }}>
          <input
            type="radio"
            id={'answer1'}
            name={'answer1'}
            value={'yes'}
            style={{ marginLeft: '1.5rem' }}
          />
          <label for={'answer1'}>Yes, I am a responsible developer</label>
        </div>

        <div style={{ display: 'flex', marginTop: '0.5rem' }}>
          <input
            type="radio"
            id={'answer2'}
            name={'answer1'}
            value={'no'}
            style={{ marginLeft: '1.5rem' }}
          />
          <label for={'answer2'}>No, I love bugs</label>
        </div>
      </Form>

      {show2 && (
        <Form onChange={(e) => handleChange(e, 2)}>
          <legend>
            Would you rather have flexibility and options, or everything
            provided out-of-the-box?
          </legend>
          <div style={{ display: 'flex', marginTop: '0.5rem' }}>
            <input
              type="radio"
              id={'answer3'}
              name={'answer2'}
              value={'mocha'}
              style={{ marginLeft: '1.5rem' }}
            />
            <label for={'answer3'}>Flexibility and options</label>
          </div>

          <div style={{ display: 'flex', marginTop: '0.5rem' }}>
            <input
              type="radio"
              id={'answer4'}
              name={'answer2'}
              value={'jest'}
              style={{ marginLeft: '1.5rem' }}
            />
            <label for={'answer4'}>Everything provided and ready to go</label>
          </div>
        </Form>
      )}

      {show3 && (
        <Form onChange={(e) => handleChange(e, 3)}>
          <legend>End-to-end testing?</legend>
          <div style={{ display: 'flex', marginTop: '0.5rem' }}>
            <input
              type="radio"
              id={'answer5'}
              name={'answer3'}
              value={'yes'}
              style={{ marginLeft: '1.5rem' }}
            />
            <label for={'answer5'}>
              Yes, I want to make sure this whole thing works
            </label>
          </div>

          <div style={{ display: 'flex', marginTop: '0.5rem' }}>
            <input
              type="radio"
              id={'answer6'}
              name={'answer3'}
              value={'no'}
              style={{ marginLeft: '1.5rem' }}
            />
            <label for={'answer6'}>No, too time-consuming</label>
          </div>
        </Form>
      )}

      {show4 && (
        <Form onChange={(e) => handleChange(e, 4)}>
          <legend>
            Does it need to work on every browser, or are Chrome and Firefox
            enough?
          </legend>
          <div style={{ display: 'flex', marginTop: '0.5rem' }}>
            <input
              type="radio"
              id={'answer7'}
              name={'answer4'}
              value={'selenium'}
              style={{ marginLeft: '1.5rem' }}
            />
            <label for={'answer7'}>Everywhere</label>
          </div>

          <div style={{ display: 'flex', marginTop: '0.5rem' }}>
            <input
              type="radio"
              id={'answer8'}
              name={'answer4'}
              value={'no'}
              style={{ marginLeft: '1.5rem' }}
            />
            <label for={'answer8'}>Just the most popular</label>
          </div>
        </Form>
      )}

      {show5 && (
        <Form onChange={(e) => handleChange(e, 5)}>
          <legend>Better documentation or multi-tab support?</legend>
          <div style={{ display: 'flex', marginTop: '0.5rem' }}>
            <input
              type="radio"
              id={'answer9'}
              name={'answer5'}
              value={'cypress'}
              style={{ marginLeft: '1.5rem' }}
            />
            <label for={'answer9'}>Better documentation</label>
          </div>

          <div style={{ display: 'flex', marginTop: '0.5rem' }}>
            <input
              type="radio"
              id={'answer10'}
              name={'answer5'}
              value={'playwright'}
              style={{ marginLeft: '1.5rem' }}
            />
            <label for={'answer10'}>Multi-tab support</label>
          </div>
        </Form>
      )}
    </Wrapper>
  );
};

export default DevOpsContent;
