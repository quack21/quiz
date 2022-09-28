import React from 'react';
import { useState } from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({ setStep, value, setValue }) {
  return (
    <div className="result">
      <img alt="pic" src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали{' '}
        {value === 1
          ? `${value} ответ из ${questions.length}`
          : `${value} ответа из ${questions.length}`}
      </h2>
      <button onClick={() => setStep(0) || setValue(0)}>Попробовать снова</button>
    </div>
  );
}

function Game({ question, step, setStep, value, setValue }) {
  const percent = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li
            onClick={() =>
              setStep(step + 1) || question.correct === index ? setValue(value + 1) : ''
            }
            key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [value, setValue] = useState(0);
  const question = questions[step];

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game question={question} step={step} setStep={setStep} value={value} setValue={setValue} />
      ) : (
        <Result setStep={setStep} value={value} setValue={setValue} />
      )}
    </div>
  );
}

export default App;
