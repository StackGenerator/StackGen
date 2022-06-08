import React from 'react';
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

const runtimeQandA = [
  {
    question: 'Centralized package manager or stronger dependency inspector?',
    answer1: 'Centralized package manager',
    value1: ['node'],
    answer2: 'Stronger dependency inspector',
    value2: ['deno'],
  },
  {
    question: 'Better security or faster development time?',
    answer1: 'Better security',
    value1: ['deno'],
    answer2: 'Faster development time',
    value2: ['node'],
  },
  {
    question: 'Popular and tried-and-tested or new and up-and-coming?',
    answer1: 'Popular and tried-and-tested',
    value1: ['node', 'node'],
    answer2: 'New and up-and-coming',
    value2: ['deno'],
  },
];

const RuntimeContent = ({ setRuntimeValues }) => {
  const handleChange = async (e, index) => {
    let values = e.target.value.split(',');
    const newState = {
      [index]: values,
    };
    setRuntimeValues((prevState) => {
      return { ...prevState, ...newState };
    });
  };

  const content = runtimeQandA.map((el, index) => {
    let question = `${index + 1}. ${el.question} `;
    return (
      <Form onChange={(e) => handleChange(e, index)} key={index}>
        <legend>{question}</legend>
        <div style={{ display: 'flex', marginTop: '0.5rem' }}>
          <input
            type="radio"
            id={el.answer1}
            name={el.question}
            value={el.value1}
            style={{ marginLeft: '1.5rem' }}
          />
          <label for={el.answer1}>{el.answer1}</label>
        </div>

        <div style={{ display: 'flex', marginTop: '0.5rem' }}>
          <input
            type="radio"
            id={el.answer2}
            name={el.question}
            value={el.value2}
            style={{ marginLeft: '1.5rem' }}
          />
          <label for={el.answer2}>{el.answer2}</label>
        </div>
      </Form>
    );
  });

  return <Wrapper>{content}</Wrapper>;
};

export default RuntimeContent;
