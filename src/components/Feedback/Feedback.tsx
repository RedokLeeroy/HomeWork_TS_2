import React from 'react';

interface IProp {
  onLeaveFeedback: (event: React.MouseEvent<HTMLButtonElement>) => void;
  options: string[];
}

export const FeedbackOptions = ({ onLeaveFeedback, options }: IProp): JSX.Element =>
  <div>
    {options.map((el, index) => <button key={index} name={el} onClick={onLeaveFeedback}>{el}</button>)}
  </div>;
