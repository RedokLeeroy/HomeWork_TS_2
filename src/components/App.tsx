import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback/Feedback';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import React from 'react';

interface IState {
  good: number;
  neutral: number;
  bad: number;
}

export class App extends React.Component<unknown, IState> {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = (): number => {
    const result = Object.values(this.state);
    return result.reduce((prev, el) => {
      return prev + el;
    }, 0);
  };

  countPositiveFeedbackPercentage = (): number => {
    const result = (this.state.good * 100) / this.countTotalFeedback();
    return Math.round(result);
  };

  handleFeedback = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const { name } = event.target as EventTarget & { name: keyof IState }; //TODO: Розібратись

    this.setState(ps => {
      return { [name]: ps[name] + 1 } as Readonly<IState>;
    });
  };

  render(): JSX.Element {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleFeedback} options={Object.keys(this.state)} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
