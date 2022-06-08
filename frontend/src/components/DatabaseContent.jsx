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

const DatabaseContent = ({ setDatabaseValues }) => {
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  const handleChange = (e, num) => {
    if (num === 1 && e.target.value === 'yes') setShow2(true);
    if (num === 1 && e.target.value === 'no') {
      setShow2(false);
      setShow3(false);
      setShow4(false);
      setShow5(false);
    }
    if (num === 2 && e.target.value === 'yes') {
      setShow3(false);
      setShow4(true);
    }
    if (num === 2 && e.target.value === 'no') setShow3(true);
    if (num === 3 && e.target.value === 'yes') setShow4(true);
    if (num === 3 && e.target.value === 'no') setShow4(false);
    if (num === 3 && e.target.value === 'yes') setShow4(true);
    if (num === 3 && e.target.value === 'mongodb') {
      setShow4(false);
      setShow5(false);
    }
    if (num === 4 && e.target.value === 'yes') setShow5(true);
    if (num === 4 && e.target.value === 'sqlite') setShow5(false);

    let values = e.target.value.split(',');
    console.log(values);
    const newState = {
      [num]: values,
    };
    setDatabaseValues((prevState) => {
      return { ...prevState, ...newState };
    });
  };

  return (
    <Wrapper>
      <Form onChange={(e) => handleChange(e, 1)}>
        <legend>
          Do you need a database for this project? (Are you going to be storing
          data?)
        </legend>
        <div style={{ display: 'flex', marginTop: '0.5rem' }}>
          <input
            type="radio"
            id={'answer1'}
            name={'answer1'}
            value={'yes'}
            style={{ marginLeft: '1.5rem' }}
          />
          <label for={'answer1'}>Yes</label>
        </div>

        <div style={{ display: 'flex', marginTop: '0.5rem' }}>
          <input
            type="radio"
            id={'answer2'}
            name={'answer1'}
            value={'no'}
            style={{ marginLeft: '1.5rem' }}
          />
          <label for={'answer2'}>No</label>
        </div>
      </Form>

      {show2 && (
        <Form onChange={(e) => handleChange(e, 2)}>
          <legend>
            Is your data highly structured and relational? In other words, are
            you going to have to draw a lot of connections between well-defined
            data items?
          </legend>
          <div style={{ display: 'flex', marginTop: '0.5rem' }}>
            <input
              type="radio"
              id={'answer3'}
              name={'answer2'}
              value={'yes'}
              style={{ marginLeft: '1.5rem' }}
            />
            <label for={'answer3'}>Yes</label>
          </div>

          <div style={{ display: 'flex', marginTop: '0.5rem' }}>
            <input
              type="radio"
              id={'answer4'}
              name={'answer2'}
              value={'no'}
              style={{ marginLeft: '1.5rem' }}
            />
            <label for={'answer4'}>No</label>
          </div>
        </Form>
      )}

      {show3 && (
        <Form onChange={(e) => handleChange(e, 3)}>
          <legend>
            Which is more important: performance and scalability, or data
            integrity?
          </legend>
          <div style={{ display: 'flex', marginTop: '0.5rem' }}>
            <input
              type="radio"
              id={'answer5'}
              name={'answer3'}
              value={'mongodb'}
              style={{ marginLeft: '1.5rem' }}
            />
            <label for={'answer5'}>Performance and scalability</label>
          </div>

          <div style={{ display: 'flex', marginTop: '0.5rem' }}>
            <input
              type="radio"
              id={'answer6'}
              name={'answer3'}
              value={'yes'}
              style={{ marginLeft: '1.5rem' }}
            />
            <label for={'answer6'}>Data integrity</label>
          </div>
        </Form>
      )}

      {show4 && (
        <Form onChange={(e) => handleChange(e, 4)}>
          <legend>
            Full-featured, or so lightweight you can set it up on a phone?
          </legend>
          <div style={{ display: 'flex', marginTop: '0.5rem' }}>
            <input
              type="radio"
              id={'answer7'}
              name={'answer4'}
              value={'yes'}
              style={{ marginLeft: '1.5rem' }}
            />
            <label for={'answer7'}>Full-featured</label>
          </div>

          <div style={{ display: 'flex', marginTop: '0.5rem' }}>
            <input
              type="radio"
              id={'answer8'}
              name={'answer4'}
              value={'sqlite'}
              style={{ marginLeft: '1.5rem' }}
            />
            <label for={'answer8'}>Light as a feather</label>
          </div>
        </Form>
      )}

      {show5 && (
        <Form onChange={(e) => handleChange(e, 5)}>
          <legend>
            Scalability and performance, or powerful features and
            ACID-compliance?
          </legend>
          <div style={{ display: 'flex', marginTop: '0.5rem' }}>
            <input
              type="radio"
              id={'answer9'}
              name={'answer5'}
              value={'mysql'}
              style={{ marginLeft: '1.5rem' }}
            />
            <label for={'answer9'}>Scalability and performance</label>
          </div>

          <div style={{ display: 'flex', marginTop: '0.5rem' }}>
            <input
              type="radio"
              id={'answer10'}
              name={'answer5'}
              value={'postgresql'}
              style={{ marginLeft: '1.5rem' }}
            />
            <label for={'answer10'}>
              Powerful features and ACID-compliance
            </label>
          </div>
        </Form>
      )}
    </Wrapper>
  );
};

export default DatabaseContent;
