import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2rem 30%;
  gap: 40px;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const frontendQandA = [
  {
    question: 'Which is more important: flexibility, or comprehensiveness?',
    answer1: 'Flexibility',
    value1: ['react'],
    answer2: 'Comprehensiveness',
    value2: ['angular'],
  },
  {
    question: 'Do you know or want to learn TypeScript?',
    answer1: 'Yes',
    value1: ['angular'],
    answer2: 'No',
    value2: ['svelte', 'svelte', 'react', 'react', 'vue', 'vue'],
  },
  {
    question:
      'Which is more important: an easy learning curve or a robust ecosystem?',
    answer1: 'Learning curve',
    value1: ['svelte', 'vue'],
    answer2: 'Ecosystem/developer tooling',
    value2: ['react', 'angular'],
  },
  {
    question: 'How important is performance (speed)?',
    answer1: 'The most important thing',
    value1: ['svelte', 'svelte', 'vue'],
    answer2: 'One factor among many',
    value2: ['react'],
  },
  {
    question: 'Which is more important: current popularity or trajectory?',
    answer1: 'Current popularity',
    value1: ['react', 'react', 'angular', 'vue'],
    answer2: 'Trajectory',
    value2: ['svelte'],
  },
];

const FrontendContent = ({ setFrontendValues }) => {
  const handleChange = async (e, index) => {
    let values = e.target.value.split(',');
    const newState = {
      [index]: values,
    };
    setFrontendValues((prevState) => {
      return { ...prevState, ...newState };
    });
  };

  const content = frontendQandA.map((el, index) => {
    return (
      <Form onChange={(e) => handleChange(e, index)} key={index}>
        <legend>{el.question}</legend>
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
