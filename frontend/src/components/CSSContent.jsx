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

const CSSContent = ({ setCssValues }) => {
  const [showQuestions, setShowQuestions] = useState(false);

  const handleChange = (e, num) => {
    if (num === 1 && e.target.value === 'yes') setShowQuestions(true);
    if (num === 1 && e.target.value === 'no') setShowQuestions(false);
    let values = e.target.value.split(',');
    const newState = {
      [num]: values,
    };
    setCssValues((prevState) => {
      return { ...prevState, ...newState };
    });
  };

  return (
    <Wrapper>
      <Form onChange={(e) => handleChange(e, 1)}>
        <legend>1. Do you want to use a CSS framework?</legend>
        <div style={{ display: 'flex', marginTop: '0.5rem' }}>
          <input
            type="radio"
            id={'answer1'}
            name={'answer1'}
            value={'yes'}
            style={{ marginLeft: '1.5rem' }}
          />
          <label for={'answer1'}>Yes, I hate writing vanilla CSS</label>
        </div>

        <div style={{ display: 'flex', marginTop: '0.5rem' }}>
          <input
            type="radio"
            id={'answer2'}
            name={'answer1'}
            value={'no'}
            style={{ marginLeft: '1.5rem' }}
          />
          <label for={'answer2'}>No, they make all sites looks the same</label>
        </div>
      </Form>
      {showQuestions && (
        <Form onChange={(e) => handleChange(e, 2)}>
          <legend>
            2. Most popular and consistent or mobile first and open source?
          </legend>
          <div style={{ display: 'flex', marginTop: '0.5rem' }}>
            <input
              type="radio"
              id={'answer3'}
              name={'answer2'}
              value={'bootstrap'}
              style={{ marginLeft: '1.5rem' }}
            />
            <label for={'answer3'}>Most popular and consistent</label>
          </div>

          <div style={{ display: 'flex', marginTop: '0.5rem' }}>
            <input
              type="radio"
              id={'answer4'}
              name={'answer2'}
              value={'foundation'}
              style={{ marginLeft: '1.5rem' }}
            />
            <label for={'answer4'}>Mobile first and open source</label>
          </div>
        </Form>
      )}
    </Wrapper>
  );
};

export default CSSContent;
