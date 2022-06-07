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

const frontendQandA = [
  {
    question: 'Which is more important: flexibility, or comprehensiveness?',
    answer1: 'Flexibility',
    value1: [['React', 1]],
    answer2: 'Comprehensiveness',
    value2: [['Angular', 1]],
  },
  {
    question: 'Do you know or want to learn TypeScript?',
    answer1: 'Yes',
    value1: [['Angular', 1]],
    answer2: 'No',
    value2: [['Angular', -2]],
  },
  {
    question:
      'Which is more important: an easy learning curve or a robust ecosystem?',
    answer1: 'Learning curve',
    value1: [
      ['Svelte', 1],
      ['Vue', 1],
    ],
    answer2: 'Ecosystem/developer tooling',
    value2: [
      ['React', 1],
      ['Angular', 1],
    ],
  },
  {
    question: 'How important is performance (speed)?',
    answer1: 'The most important thing',
    value1: [
      ['Svelte', 2],
      ['Vue', 1],
    ],
    answer2: 'One factor among many',
    value2: [['React', 1]],
  },
  {
    question: 'Which is more important: current popularity or trajectory?',
    answer1: 'Current popularity',
    value1: [
      ['React', 2],
      ['Angular', 1],
      ['Vue', 1],
    ],
    answer2: 'Trajectory',
    value2: [['Svelte', 1]],
  },
];

const initialState = {
  0: [],
  1: [],
  2: [],
  3: [],
  4: [],
};

const FrontendContent = () => {
  const [frontendValues, setFrontendValues] = useState(initialState);

  const handleChange = (e, index) => {
    let values = e.target.value;
    const newState = {
      [index]: values,
    };
    setFrontendValues((prevState) => {
      return { ...prevState, ...newState };
    });

    console.log(typeof values);
  };

  const content = frontendQandA.map((el, index) => {
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

export default FrontendContent;
